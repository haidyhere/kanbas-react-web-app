import { Button, Card, Col, Form, Row } from "react-bootstrap";
//import * as db from "../../Database"
import { useParams, Link, useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { addAssignment, updateAssignment } from "./reducer";
import { useEffect, useState } from "react";


export default function AssignmentEditor() {
    const { cid } = useParams();
    const { aid } = useParams();
    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const assignment = assignments.find((a: any) => a.course === cid && a._id === aid);

    const isEditing = !!aid && !!assignment;

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [points, setPoints] = useState( 100);
    const [dueDate, setDueDate] = useState("");
    const [availableFromDate, setAvailableFromDate] = useState("");
    const [availableUntilDate, setAvailableUntilDate] = useState("");


    useEffect(() => {
        if (isEditing && assignment) {
            setTitle(assignment.title || "");
            setDescription(assignment.description || "");
            setPoints(assignment.points || 100);
            setDueDate(assignment.dueDate || "");
            setAvailableFromDate(assignment.availableFromDate || "");
            setAvailableUntilDate(assignment.availableUntilDate || "");
        } else {
            setTitle("New Assignment");
            setDescription("New Assignment Description");
            setPoints(100);
            setDueDate("");
            setAvailableFromDate("");
            setAvailableUntilDate("");
        }
    }, [isEditing, assignment]);
    
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const handleSave = () => {
        const assignmentData = {
        _id: isEditing ? aid : new Date().getTime().toString(),
        title,
        description,
        points,
        dueDate,
        availableFromDate,
        availableUntilDate,
        course: cid,
        };
        if (isEditing) {
            dispatch(updateAssignment(assignmentData));
        } else {
            dispatch(addAssignment(assignmentData));
        }
    
        navigate(`/Kambaz/Courses/${cid}/Assignments`);};
  
    
    
    return (
        <Form id="wd-assignments-editor" className="p-4">
            <Form.Group className="mb-3" controlId="wd-name">
                <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
                <Form.Control type="text" value={title} 
                onChange={(e) => setTitle(e.target.value)}    />
            </Form.Group>
            <Form.Group className="mb-3" controlId="wd-description"> 
                <Form.Label>Description</Form.Label> 
                <Form.Control as="textarea" rows={6} 
                value={description}
                onChange={(e) => setDescription(e.target.value)} /> 
            </Form.Group> 

            <Form.Group as={Row} className="mb-3" controlId="wd-points">
                <Form.Label column sm={2}>Points</Form.Label>
                <Col sm={10}>
                    <Form.Control type="number" value={points}
                    onChange={(e) => setPoints(Number(e.target.value))} />
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
                        <Form.Control type="date" value={dueDate} 
                        onChange={(e) => setDueDate(e.target.value) }/>
                    </Form.Group>
                    <Row>
                        <Col>
                        <Form.Group className="mb-3" controlId="wd-available-from">Available From</Form.Group>
                        <Form.Control type="date" value={availableFromDate} 
                        onChange={(e) => setAvailableFromDate(e.target.value)}/>
                        </Col>
                        <Col>
                        <Form.Group className="mb-3" controlId="wd-available-until">Until</Form.Group>
                        <Form.Control type="date" value={availableUntilDate } 
                        onChange={(e) => setAvailableUntilDate(e.target.value)}/>
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
                {/*<Link to={`/Kambaz/Courses/${cid}/Assignments`}>
                */}
                <Button variant="danger" onClick={handleSave}>{isEditing ? "Update": "Save"}</Button>
               {/* </Link>*/}
            </div>
     
        </Form>
    );
}