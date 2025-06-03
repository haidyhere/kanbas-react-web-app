import { Routes, Route, Navigate } from "react-router";
import Account from "./Account";
import Dashboard from "./Dashboard";
import KambazNavigation from "./Navigation";
import Courses from "./Courses";
import "./styles.css";
//import { useState } from "react";
//import * as db from "./Database";
import ProtectedRoute from "./Account/ProtectedRoute";

export default function Kambaz() {
  {/*}
    const [courses, setCourses] = useState<any[]>(db.courses);
        const [course, setCourse]  = useState<any>({
        _id: "0", name: "New Course", number: "New Number",
        startDate: "2025-09-10", endDate: "2025-12-15",
        image: "/images/reactjs.jpg",
        description: "New Description"
        });
    
        const addNewCourse = () => {
        const newCourse = { ...course,
          _id: new Date().getTime().toString() };
        setCourses([ ...courses, newCourse ]);
        };
        const deleteCourse = (courseId: string) => {
        setCourses(courses.filter(
          (course) => course._id !== courseId));
        };
    
        const updateCourse = () => {
        setCourses(
          courses.map((c) => {
            if (c._id === course._id) {
              return course;
            } else {
              return c;
            }
          })    );  };
              */}

    return (
        <div id="wd-kambaz">   
            <KambazNavigation />
            <div className="wd-main-content-offset p-3">
                
                    <Routes>
                        <Route path="/" element={<Navigate to="Account" />} />
                        <Route path="/Account/*" element={<Account />} />
                        <Route path="/Dashboard" element= {
                          <ProtectedRoute>
                            <Dashboard 
                            /*courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                                */
                                />
                          </ProtectedRoute>
                        } />

                        <Route path="/Courses/:cid/*" element={
                          <ProtectedRoute>
                            <Courses 
                           /* courses={courses}
                            */
                            />
                          </ProtectedRoute>} />

                        <Route path="/Calendar" element={<h1>Calendar</h1>} />
                        <Route path="/Inbox" element={<h1>Inbox</h1>} />
                        <Route path="/Help" element={<h1>Help</h1>} />
                    </Routes>
            </div>
            
            

                
        </div>
    );
}