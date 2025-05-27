import { Button, Card, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import * as db from "./Database";

export default function Dashboard() {
    const courses = db.courses;
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses ({courses.length})</h2> <hr />
            <div id="wd-dashboard-courses">
                <Row xs={1} md={5} className="g-4"> 
                    {courses.map((course) => (
                    <Col className="wd-dashboard-course" style={{ width: "300px" }}>
                        <Card>
                            <Link to={`/Kambaz/Courses/${course._id}/Home`} 
                                className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/reactjs.jpg" width="100%" height={160} />
                            <Card.Body className="card-body">
                                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">{course.name}</Card.Title>
                                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    {course.description}
                                </Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                            
                        </Link>
                        </Card>
                    </Col>
                    ))}
                
                {/*}
                <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
                    <Card>
                        <Link to="/Kambaz/Courses/5001/Home" className="wd-dashboard-course-link text-decoration-none text-dark">  
                            <Card.Img variant="top" src="/images/python.jpg" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5001 Intro to Python</Card.Title>
                                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Introduction to Python programming
                                </Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>  
                        </Link>
                    </Card>
                    
                </Col>

                <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
                    <Card>
                        <Link to="/Kambaz/Courses/5002/Home" className="wd-dashboard-course-link text-decoration-none text-dark"> 
                            <Card.Img variant="top" src="/images/discrete.jpg" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5002 Discrete Mathematics</Card.Title>    
                                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Introduction to Discrete Mathematics
                                </Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                            
                        </Link>
                    </Card>
                </Col>

                <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
                    <Card>
                        <Link to="/Kambaz/Courses/5003/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                                <Card.Img variant="top" src="/images/algorithm.jpg" width="100%" height={160} />
                                <Card.Body>
                                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5003 Algorithms</Card.Title>
                                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Introduction to Algorithms
                                </Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                            
                        </Link>
                    </Card>
                </Col>

                <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
                    <Card>
                        <Link to="/Kambaz/Courses/5004/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/ai.jpg" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5004 Artificial Intelligence</Card.Title>
                                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Introduction to Artificial Intelligence
                                </Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body> 
                        </Link>
                    </Card>
                </Col>

                <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
                    <Card>
                        <Link to="/Kambaz/Courses/5005/Home" className="wd-dashboard-course-link text-decoration-none text-dark">    
                            <Card.Img variant="top" src="/images/machinelearning.jpg" width="100%" height={160} />
                            <Card.Body> 
                                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5005 Machine Learning</Card.Title>
                                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Introduction to Machine Learning
                                </Card.Text>
                                <Button variant="primary">Go</Button>
                            </Card.Body>
                            
                        </Link>
                    </Card>
                </Col>

                <Col className="wd-dashboard-course" style={{ width: "300px" }}> 
                    <Card>
                        <Link to="/Kambaz/Courses/5006/Home" className="wd-dashboard-course-link text-decoration-none text-dark">
                            <Card.Img variant="top" src="/images/network.jpg" width="100%" height={160} />
                            <Card.Body>
                                <Card.Title className="wd-dashboard-course-title text-nowrap overflow-hidden">CS5006 Network</Card.Title>
                                <Card.Text className="wd-dashboard-course-description overflow-hidden" style={{ height: "100px" }}>
                                    Introduction to Computer Networks
                                </Card.Text>
                            <Button variant="primary">Go</Button>
                            </Card.Body>
                            
                        </Link>
                    </Card>
                </Col>

                */}
            


                </Row>
            </div>
                

        </div>
        
    );
}