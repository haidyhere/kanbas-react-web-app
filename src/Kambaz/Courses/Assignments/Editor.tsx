import { Button, Card, Col, Form, Row } from "react-bootstrap";
import * as db from "../../Database"
import { useParams, Link } from "react-router";

export default function AssignmentEditor() {
    const { cid } = useParams();
    const { aid } = useParams();
    const assignment = db.assignments.find((a) => a.course === cid && a._id === aid);
    
    return (
        <Form id="wd-assignments-editor" className="p-4">
            <Form.Group className="mb-3" controlId="wd-name">
                <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
                <Form.Control type="text" value={assignment ? assignment.title: ""} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="wd-description"> 
                <Form.Label>Description</Form.Label> 
                <Form.Control as="textarea" rows={6} 
                value={assignment ? assignment.description: ""} /> 
            </Form.Group> 

            <Form.Group as={Row} className="mb-3" controlId="wd-points">
                <Form.Label column sm={2}>Points</Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" value={assignment?assignment.points : 100} />
                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="wd-group">
                <Form.Label column sm={2}>Assignment Group</Form.Label>
                <Col sm={10}>
                    <Form.Select defaultValue="ASSIGNMENTS">
                        <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                        <option value="EXAMS">EXAMS</option>
                        <option value="QUIZZES">QUIZZES</option>
                        <option value="PROJECTS">PROJECTS</option>
                    </Form.Select>

                </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="wd-display-grade-as">
                <Form.Label column sm={2}>Display Grade as</Form.Label>
                <Col sm={10}>
                    <Form.Select defaultValue="Percentage">
                        <option value="Percentage">Percentage</option>
                    </Form.Select>
                </Col>
            </Form.Group>
            
            <Form.Group as={Row} className="mb-3" controlId="wd-submission-type">
                <Form.Label column sm={2}>Submission Type</Form.Label>
                <Col sm={10}>
                    <Card className="p-3">
                    <Form.Select defaultValue="Online">
                        <option value="Online">Online</option>
                    </Form.Select>
                    <br/>
                    <Card.Title as="h6" className="mb-3">Online Entry Options</Card.Title>
                    <Form.Check type="checkbox" id="wd-text-entry" label="Text Entry" />
                    <Form.Check type="checkbox" id="wd-website-url" label="Website URL"/>
                    <Form.Check type="checkbox" id="wd-media-recordings" label="Media Recordings" />
                    <Form.Check type="checkbox" id="wd-student-annotation" label="Student Annotation" />
                    <Form.Check type="checkbox" id="wd-file-upload" label="File Uploads" />
                    <hr />
                </Card>
                </Col>
                
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="wd-assign-to">
                <Form.Label column sm={2}>Assign</Form.Label>
                <Col sm={10}>
                <Card className="p-3">
                    <Form.Label>Assign to</Form.Label>
                    <Form.Select defaultValue="Everyone" className="mb-3">
                        <option value="Everyone" >Everyone</option>
                        <option value="Section 1">Section 1</option>
                        <option value="Section 2">Section 2</option>
                    </Form.Select>
                    <Form.Group className="mb-3" controlId="wd-due-date">
                        <Form.Label>Due</Form.Label>
                        <Form.Control type="date" value={assignment ? assignment.dueDate: "" } />
                    </Form.Group>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="wd-available-from">Available From</Form.Group>
                        <Form.Control type="date" value={assignment ? assignment.notAvailable : ""} />
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="wd-available-until">Until</Form.Group>
                        <Form.Control type="date" value={assignment ? assignment.dueDate: "" } />
                        </Col>
                        
                    </Row>
                    
                    <hr />
                    </Card>
                </Col>
            </Form.Group>

            <div className="d-flex justify-content-end mt-4">
                
                <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                <Button variant="secondary" className="me-2">Cancel</Button>
                </Link>
                <Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                <Button variant="danger">Save</Button>
                </Link>
            </div>
     
        </Form>
    );
}