import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
import { useEffect, useState } from "react";
//import * as db from "./Database";
import ProtectedRoute from "./Account/ProtectedRoute";
import Session from "./Account/Session";
//import * as userClient from "./Account/client";
import { useSelector } from "react-redux";
import { setCourses } from "./Courses/reducer";
//import { v4 as uuidv4 } from "uuid";
import * as courseClient from "./Courses/client";
import * as userClient from "./Account/client";


export default function Kambaz() {
    //const dispatch = useDispatch();
    //const [courses, setCourses] = useState<any[]>([]);
    
    
    const { currentUser } = useSelector((state: any) => state.accountReducer); 
    const [enrolling] = useState<boolean>(false); 
    const findCoursesForUser = async () => { 
      try { const courses = await userClient.findCoursesForUser(currentUser._id);  
        setCourses(courses); 
      } catch (error) { console.error(error); } };

    const fetchCourses = async () => { 
      try { 
        const allCourses = await courseClient.fetchAllCourses();
        const enrolledCourses = await userClient.findCoursesForUser( currentUser._id ); 
        const courses = allCourses.map((course: any) => { 
          if (enrolledCourses.find((c: any) => c._id === course._id)) { 
            return { ...course, enrolled: true }; 
          } else { return course; 
          }
        });
        setCourses(courses);
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
      if (enrolling) {
      fetchCourses(); 
      } else {
        findCoursesForUser();
      }
    }, [currentUser, enrolling]);
  

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
