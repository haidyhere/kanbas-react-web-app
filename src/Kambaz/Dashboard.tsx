import { Button, Card, Col, Row } from "react-bootstrap";
//import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as db from "./Database";
import { addCourse, deleteCourse, updateCourse, setCourse } from "./Courses/reducer";
import { useEffect, useState } from "react";
import ProtectedLink from "./ProtectedLink";


export default function Dashboard(
    {/*{
    courses, course, setCourse, addNewCourse, deleteCourse, updateCourse 
    }: {
  courses: any[]; 
  course: any; 
  setCourse: (course: any) => void;
  addNewCourse: () => void; 
  deleteCourse: (course: any) => void;
  updateCourse: () => void; }
  */}
)
    
 {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const dispatch = useDispatch();

    const {courses, currentCourse} = useSelector((state: any) => state.coursesReducer);
    //const { enrollments } = db;

    const [showAllCourses, setShowAllCourses] = useState(false);
    const [userEnrollments, setUserEnrollments] = useState<string[]>([]);
    
    const isFaculty = currentUser?.role === "FACULTY";

    useEffect(() => {
        if (currentUser?._id) {
            const saved = localStorage.getItem(`enrollments_${currentUser._id}`);
            if (saved) {
                setUserEnrollments(JSON.parse(saved));
            } else {      
                const initialEnrollments = db.enrollments
                    .filter((enrollment: any) => enrollment.user === currentUser._id)
                    .map((enrollment: any) => enrollment.course);
                setUserEnrollments(initialEnrollments);
                localStorage.setItem(`enrollments_${currentUser._id}`, JSON.stringify(initialEnrollments));
            }
        }
    }, [currentUser?._id]);

    const saveEnrollments = (enrollments: string[]) => {
        localStorage.setItem(`enrollments_${currentUser._id}`, JSON.stringify(enrollments));
        setUserEnrollments(enrollments);
    };
    const isEnrolledIn = (courseId: string) => {
        return userEnrollments.includes(courseId);
    };
    const displayedCourses = showAllCourses 
        ? courses 
        : courses.filter((course: any) => isEnrolledIn(course._id));
    
    const addNewCourse = () => {
        dispatch(addCourse(currentCourse));
        
    }
    const handleDeleteCourse = (courseId: string) => {
        dispatch(deleteCourse(courseId));
        if (isEnrolledIn(courseId)) {
            const newEnrollments = userEnrollments.filter(id => id !== courseId);
            saveEnrollments(newEnrollments);
        }
    };
    const handleUpdateCourse = () => {
        dispatch(updateCourse(currentCourse));
    };
    const handleSetCourse = (course: any) => {
        dispatch(setCourse(course));
    }
    const handleCourseChange = (field: string, value: any) => {
        dispatch(setCourse({ ...currentCourse, [field]: value }));
    };
    const handleEnroll = (courseId: string) => {
        const newEnrollments = [...userEnrollments, courseId];
        saveEnrollments(newEnrollments);
    };
    const handleUnenroll = (courseId: string) => {
        const newEnrollments = userEnrollments.filter(id => id !== courseId);
        saveEnrollments(newEnrollments);
    };

    return (
        <div id="wd-dashboard">
            <div className="d-flex justify-content-between align-items-center">
            <h1 id="wd-dashboard-title">Dashboard({currentUser.username})</h1>
                <Button 
                    variant="primary" 
                    onClick={() => setShowAllCourses(!showAllCourses)}
                >
                    {showAllCourses ? "My Courses" : "All Courses"}
                </Button>
                </div>
                 <hr />
            {isFaculty && (
            <>
            <h5>New Course
                <button
                    className="btn btn-primary float-end"
                    id="wd-add-new-course-click"
                    onClick={addNewCourse} > Add </button>
                
                <Button className="float-end me-2" variant="success"
                onClick={handleUpdateCourse}>
                Update
                </Button>

            </h5><br />
            <input value={currentCourse.name} className="form-control mb-2" 
                onChange={(e) => handleCourseChange('name', e.target.value)} />
            <textarea value={currentCourse.description} className="form-control"
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
                                                    <Button 
                                                        variant="danger" 
                                                        size="sm"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            handleUnenroll(course._id);
                                                        }}
                                                        className="me-2"
                                                    >
                                                        Unenroll
                                                    </Button>
                                                ) : (
                                                    <Button 
                                                    variant="success" 
                                                        size="sm"
                                                        onClick={(event) => {
                                                            event.preventDefault();
                                                            handleEnroll(course._id);
                                                        }}
                                                        className="me-2"
                                                    >Enroll
                                                    </Button>
                                                )}
                                {isFaculty && (
                                    <>
                                <Button variant="danger" onClick={(event) => {
                                        event.preventDefault();
                                        handleDeleteCourse(course._id);
                                        }} className="float-end" >
                                        Delete
                                </Button>
                                <Button id="wd-edit-course-click" variant="warning"
                                    onClick={(event) => {
                                        event.preventDefault();
                                        handleSetCourse(course);
                                    }}
                                    className="me-2 float-end" >
                                    Edit
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
{/*}
function dispatch(arg0: { payload: any; type: "courses/addCourse"; }) {
    throw new Error("Function not implemented.");
}
    */}
