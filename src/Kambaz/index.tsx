import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect } from "react";
//import * as db from "./Database";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
import * as userClient from "./Account/client";
import { useSelector, useDispatch } from "react-redux";
import { setCourses } from "./Courses/reducer";
//import { v4 as uuidv4 } from "uuid";
//import * as courseClient from "./Courses/client";


export default function Kambaz() {
    const dispatch = useDispatch();
    //const [courses, setCourses] = useState<any[]>([]);
    
    
    const { currentUser } = useSelector((state: any) => state.accountReducer); 
     

    const fetchCourses = async () => { 
      try { const courses = await userClient.findMyCourses(); 
        dispatch(setCourses(courses)); 
      } catch (error) { 
        console.error(error); 
      } 
    }; 
    /*
    const addNewCourse = async (course: any) => {
      await userClient.createCourse(course);
      dispatch(addCourse( course));
    };
    const removeCourse = async (courseId: string) => { 
       await courseClient.deleteCourse(courseId); 
       dispatch(deleteCourse(courseId));
    };

    const saveCourse = async (course: any) => { 
      await courseClient.updateCourse(course);
      dispatch(updateCourse(course));
    };
*/
    useEffect(() => { 
      fetchCourses(); 
    }, [currentUser]);
  

    return (
      <Session>
        <div id="wd-kambaz">   
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
                
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element= {
                          <ProtectedRoute>
                            <Dashboard 
                              
                            /* courses={courses}
                              course={course} 
                              setCourse={setCourse}
                              
                              deleteCourse={deleteCourse}
                              updateCourse={updateCourse}
                                */
                                />
                          </ProtectedRoute>
                        } />

                        <Route path="/Courses/:cid/*" element={
                          <ProtectedRoute>
                            <Courses 
                            //courses={courses}
                            />
                          </ProtectedRoute>} />

                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                        <Route path="/Help" element={<h1>Help</h1>} />
                    </Routes>
            </div>       
        </div>
      </Session>
    );
}
