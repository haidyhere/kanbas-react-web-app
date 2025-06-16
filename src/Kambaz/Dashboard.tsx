import { Button, Card, Col, Row } from "react-bootstrap";
//import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//import * as db from "./Database";
import { addCourse, deleteCourse, updateCourse, setCourses, setCurrentCourse } from "./Courses/reducer";
import { useEffect, useState } from "react";
import ProtectedLink from "./ProtectedLink";
import * as enrollmentsClient from "./Enrollments/client";
import {setEnrollments, addEnrollment, removeEnrollment } from "./Enrollments/reducer";
import * as coursesClient from "./Courses/client";
//import { v4 as uuidv4 } from "uuid";

export default function Dashboard(
   

) 
 {
     
    //const [courses, setCourses] = useState<any[]>(db.courses);
    //const [course, setCourse] = useState<any>({ _id: "0", name: "New Course", number: "New Number", startDate: "2023-09-10", endDate: "2023-12-15", image: "/images/reactjs.jpg", description: "New Description" }); 
   // const addNewCourse = () => { const newCourse = { ...course, _id: uuidv4() }; setCourses([...courses, newCourse ]); };
    //const deleteCourse = (courseId: string) => { setCourses(courses.filter((course) => course._id !== courseId)); };
    //const updateCourse = () => { setCourses( courses.map((c) => { if (c._id === course._id) { return course; } else { return c; } }) ); };

    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    const {courses, currentCourse} = useSelector((state: any) => state.coursesReducer);
    //const { enrollments } = db;

    const [showAllCourses, setShowAllCourses] = useState(false);
    //const [userEnrollments, setUserEnrollments] = useState<string[]>([]);
    const { enrollments } = useSelector((state:any)=>state.enrollmentsReducer);
    const userEnrollments = enrollments.map((e:any)=> e.course._id);
    console.log("User Enrolled Course IDs:", userEnrollments);
    const isFaculty = currentUser?.role === "FACULTY";

    const fetchCourses = async () => {
        const data = await coursesClient.findAllCourses();
        dispatch(setCourses(data));
    };
    useEffect(() => {
        fetchCourses();
        /*
        if (!currentUser?._id) return;
        (async () => {
    const data = await coursesClient.findAllCourses();
    dispatch(setCourses(data));
  })();*/
        if (!currentUser?._id) return;
            (async () => {
                const data = await enrollmentsClient.findEnrollmentsByUser(currentUser._id);
                console.log("Fetched enrollments for user:", data);
                dispatch(setEnrollments(data));
        })();
           
    }, [currentUser?._id]);
/*
    const saveEnrollments = (enrollments: string[]) => {
        localStorage.setItem(`enrollments_${currentUser._id}`, JSON.stringify(enrollments));
        setUserEnrollments(enrollments);
    };
    */
    const isEnrolledIn = (courseId: string) => {
        return userEnrollments.includes(courseId);
    };
    const displayedCourses = showAllCourses 
        ? courses 
        : courses.filter((course: any) => isEnrolledIn(course._id));
    
    //const addNewCourse = async () => {
     //   dispatch(addCourse(currentCourse));}
     const addNewCourse = async () => {
        if (!currentCourse.name) return;
        try {
        const newCourse = await coursesClient.createCourse(currentCourse);
        dispatch(addCourse(newCourse));
        const updatedEnrollments = await enrollmentsClient.findEnrollmentsByUser(currentUser._id);
        dispatch(setEnrollments(updatedEnrollments));
        } catch (error) {
        console.error("Error creating course:", error);
        alert("Failed to create course. Please check console for details.");
    }
    };
   
    /*
    const handleDeleteCourse = (courseId: string) => {
        dispatch(deleteCourse(courseId));
        if (isEnrolledIn(courseId)) {
            const newEnrollments = userEnrollments.filter(id => id !== courseId);
            saveEnrollments(newEnrollments);
        }
    };
    */
 
   
   const handleDeleteCourse = async (courseId: string) => {
    await coursesClient.deleteCourse(courseId);
    dispatch(deleteCourse(courseId));

    if (isEnrolledIn(courseId)) {
        dispatch(removeEnrollment(courseId));
        await enrollmentsClient.unenrollCourse(currentUser._id, courseId);

    }
};

    const handleUpdateCourse = async () => {
        try {
        console.log("Current course before update:", currentCourse);
        
        if (!currentCourse._id) {
            console.error("No course ID found");
            return;
        }
        const updatedCourse = await coursesClient.updateCourse(currentCourse);
        console.log("Course updated successfully:", updatedCourse);
        dispatch(updateCourse(currentCourse));
        dispatch(updateCourse(updatedCourse));
    } catch (error) {
        console.error("Error updating course:", error);
        alert("Failed to update course. Please check console for details.");
    }
    };
    const handleSetCourses = (course: any) => {
        dispatch(setCurrentCourse(course));
    }
    const handleCourseChange = (field: string, value: any) => {
        dispatch(setCurrentCourse({ ...currentCourse, [field]: value }));
    };
    const handleEnroll = async (courseId: string) => {
        //const newEnrollments = [...userEnrollments, courseId];
        //saveEnrollments(newEnrollments);
        const data = await enrollmentsClient.enrollCourse(currentUser._id, courseId);
        dispatch(addEnrollment(data));
    };
    const handleUnenroll = async (courseId: string) => {
        //const newEnrollments = userEnrollments.filter(id => id !== courseId);
        //saveEnrollments(newEnrollments);
        await enrollmentsClient.unenrollCourse(currentUser._id, courseId);
        dispatch(removeEnrollment(courseId));
    };

    return (
      <div id="wd-dashboard">
        <div className="d-flex justify-content-between align-items-center">
          <h1 id="wd-dashboard-title">Dashboard({currentUser.username})</h1>
            <Button 
              variant="primary" 
              onClick={() => setShowAllCourses(!showAllCourses)}>
              {showAllCourses ? "My Courses" : "All Courses"}
            </Button>
        </div>
        <hr />
        {isFaculty && (
        <>
          <h5>New Course
            <button className="btn btn-primary float-end"
              id="wd-add-new-course-click"
              onClick={addNewCourse} > Add </button>
                
            <Button className="float-end me-2" variant="success"
                onClick={handleUpdateCourse}> Update
            </Button>

            </h5><br />
            <input value={currentCourse?.name || ""} className="form-control mb-2" 
                onChange={(e) => handleCourseChange('name', e.target.value)} />
            <textarea value={currentCourse?.description || ""} className="form-control"
                onChange={(e) => handleCourseChange('description', e.target.value)} /> <hr />
              </>
    )}

        <h2 id="wd-dashboard-published">
            {showAllCourses ? `All Courses (${courses.length})` : `Published Courses (${displayedCourses.length})`}
        </h2> <hr />
        <div id="wd-dashboard-courses">
          <Row xs={1} md={5} className="g-4"> 
            {displayedCourses.map((course: any) => (
                    
              <Col key={course._id} className="wd-dashboard-course" style={{ width: "300px" }}>
                <Card> 
                  <ProtectedLink to={`/Kambaz/Courses/${course._id}/Home`} 
                    courseId={course._id}
                    userEnrollments={userEnrollments}
                    className="wd-dashboard-course-link text-decoration-none text-dark">
                    <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                    <Card.Body className="card-body">
                    <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                    <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                      {course.description}
                    </Card.Text>
                                
                    <Button variant="primary">Go</Button>
                                
                    <div>  
                      {isEnrolledIn(course._id) ? (
                        <Button variant="danger" size="sm"
                          onClick={(event) => {event.preventDefault(); handleUnenroll(course._id);}}
                          className="me-2"> Unenroll
                        </Button>
                      ) : (
                          <Button variant="success" size="sm"
                            onClick={(event) => {event.preventDefault(); handleEnroll(course._id);}}
                            className="me-2"> Enroll
                          </Button>
                          )}
                      {isFaculty && (
                      <>
                      <Button variant="danger" onClick={(event) => {
                          event.preventDefault(); handleDeleteCourse(course._id);
                          }} className="float-end" >Delete
                      </Button>
                      <Button id="wd-edit-course-click" variant="warning"
                        onClick={(event) => {event.preventDefault(); handleSetCourses(course);
                        }}className="me-2 float-end" >Edit
                      </Button>
                      </>
                      )}
        </div>

                  </Card.Body>
                            
                  </ProtectedLink>
              </Card>
              </Col>
       ))}
      </Row>
    </div>
    </div>
        
  );
}

