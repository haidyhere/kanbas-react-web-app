import { ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import LessonControlButtons from "./LessonControlButtons";
import { useParams } from "react-router"; 
//import * as db from "../../Database";
import ModuleControlButtons from "./ModuleControlButtons";
import { useState } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";
import * as coursesClient from "../client";
import { useEffect } from "react";
import * as modulesClient from "./client";

export  default function Modules() {

    const { cid } = useParams(); 
    //const [modules, setModules] = useState<any[]>(db.modules);
    const [moduleName, setModuleName] = useState("");
    const { modules } = useSelector(
        (state: any) => state.modulesReducer);
    const dispatch = useDispatch();


    const deleteModuleHandler = async (moduleId: string) => { 
        await modulesClient.deleteModule(moduleId); 
        dispatch(deleteModule(moduleId)); 
    };
    //const createModuleForCourse = async () => { 
      //  if (!cid) return; 
      //  const newModule = { name: moduleName, course: cid }; 
      //  const module = await coursesClient.createModuleForCourse(cid, newModule); 
      //  dispatch(addModule(module)); 
    //};
    const addModuleHandler = async () => {
      const newModule = await coursesClient.createModuleForCourse(cid!, {
        name: moduleName,
        course: cid,
      });
        dispatch(addModule(newModule));
        setModuleName("");
    };
    const updateModuleHandler = async (module: any) => { 
      await modulesClient.updateModule(module); 
      dispatch(updateModule(module)); 
    };

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";
    const fetchModules = async () => { 
        const modules = await coursesClient.findModulesForCourse(cid as string); 
        dispatch(setModules(modules)); 
    }; 
    useEffect(() => { 
        fetchModules(); 
      }
      , [cid]);

    
    return (
      <div>
        {isFaculty && (
          <ModulesControls 
            
            setModuleName={setModuleName}
            moduleName={moduleName} 
            addModule ={addModuleHandler}

          />
        )}
        <br /><br /><br /><br />
        <ListGroup className="rounded-0" id="wd-modules">
          {modules
                    //.filter((module: any) => module.course === cid)
            .map((module: any) => (
              <ListGroup.Item className="wd-module p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary">
                  <BsGripVertical className="me-2 fs-3" /> 

                    {!module.editing && module.name}
                      { isFaculty && module.editing && (
                        <input className="form-control w-50 d-inline-block"
                          onChange={(e) => updateModuleHandler
                            //dispatch(updateModule(
                            ({ ...module, name: e.target.value })}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              updateModuleHandler({ ...module, editing: false });
                              //dispatch(updateModule({ ...module, editing: false }));
                            }
                          }}
                            defaultValue={module.name}/>
                      )}
                        {isFaculty && (
                          <ModuleControlButtons moduleId={module._id}
                            deleteModule={(moduleId) => deleteModuleHandler(moduleId)}
                            editModule={(moduleId) => dispatch(editModule(moduleId))} 
                          />
                        )}
                        
                            
                </div>
              {module.lessons && (
                <ListGroup className="wd-lessons rounded-0">
                  {module.lessons.map((lesson: any) => (
                    <ListGroup.Item className="wd-lesson p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" />{lesson.name} <LessonControlButtons />
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              )}
            </ListGroup.Item>
          ))}
        </ListGroup>

      </div>
    );
}