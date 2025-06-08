import { useState } from "react";
const REMOTE_SERVER = import.meta.env.VITE_REMOTE_SERVER; 

export default function ModuleObject() { 
    const [module, setModule] = useState({
        id: 123, 
        name: "Rocket Propulsion",
        description: "This course provides an in-depth study of the fundamentals of rocket propulsion, covering topics such as propulsion theory, engine types, fuel chemistry, and the practical applications of rocket technology. Designed for students with a strong background in physics and engineering, the course includes both theoretical instruction and hands-on laboratory work",
        course: "RS 101",
        score: 0,
        completed: false,
  });
    const ASSIGNMENT_API_URL = `${REMOTE_SERVER}/lab5/module`

    return ( 
    <div id="wd-module-objects"> 
        <h3>Module Objects</h3> 
        <a id="wd-module-object" className="btn btn-primary" 
            href={`${REMOTE_SERVER}/lab5/module`}> 
            Get Module </a>
        <hr/> 
        
        <a className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/module/name`}>
            Get Module Name
        </a><hr/>

        <a className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/module/score`}>
            Get Module Score
        </a><hr/>

        <a className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/module/completed`}>
            Get Module Completed Status
        </a><hr/>

        <a className="btn btn-primary"
            href={`${REMOTE_SERVER}/lab5/module/description`}>
            Get Module Description
        </a><hr/>

        <h4>Modifying Properties</h4>
        <h5>Modifying Module Name</h5>
            <a id="wd-update-module-name" 
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/name/${module.name}`}>
                Update Name
            </a>
            <input className="form-control w-75" id="wd-module-name"
                defaultValue={module.name} onChange={(e) =>
                setModule({ ...module, name: e.target.value })}/> 
            <hr />
        <h5>Moddifyjing Module Score</h5>
                <a id="wd-update-module-score" 
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/score/${module.score}`}>
                Update Score
            </a>
            <input className="form-control w-75" id="wd-module-score"
                defaultValue={module.score} onChange={(e) =>
                setModule({ ...module, score: parseInt(e.target.value) })}/> 
            <hr />
        <h5>Modifying Module Completed Status</h5>
        <a id="wd-update-module-completed-status" 
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/completed/${module.completed}`}>
                Update Completed Status
            </a>
            <div>
            <input id="wd-module-completed-status"
                type="checkbox"
                checked={module.completed} onChange={(e) =>
                setModule({ ...module, completed: e.target.checked })}/> 
                <label htmlFor="wd-module-completed-status">Completed</label>
                </div>
            <hr />
        <h5>Modifying Module Description</h5>
        <a id="wd-update-module-description" 
                className="btn btn-primary float-end"
                href={`${ASSIGNMENT_API_URL}/description/${module.description}`}>
                Update Description
            </a>
            <textarea className="form-control w-75" id="wd-module-name"
                rows={4}
                defaultValue={module.description} onChange={(e) =>
                setModule({ ...module, description: e.target.value })}/> 
                
            <hr />
    

    </div> 
);}