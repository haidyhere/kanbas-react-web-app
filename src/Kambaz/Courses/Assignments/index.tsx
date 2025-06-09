import { Button, FormControl, InputGroup, ListGroup } from "react-bootstrap";
import { BsGripVertical } from "react-icons/bs";
import { FaPlus, FaSearch } from "react-icons/fa";
import AssignmentControl from "./AssignmentControl";
import { LuNotebookPen } from "react-icons/lu";
//import * as db from "../../Database";
import { useParams, Link } from "react-router";
import { useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { setAssignments, deleteAssignment as deleteAssignmentAction } from "./reducer";
import * as assignmentsClient from "./client";
import { useEffect } from "react";

export default function Assignments() {
    const { cid } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const { assignments } = useSelector((state: any) => state.assignmentsReducer);
    const filteredAssignments = assignments.filter((assignment: any) => assignment.course === cid);
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";
/*
    const handleDeleteAssignment = (assignmentId: string) => {
        dispatch(deleteAssignment(assignmentId));
    };
    */
  

    const formatDate = (dateString: string | number | Date, isAvailable = false) => {
        const date = new Date(dateString);
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"];
        const month = monthNames[date.getMonth()];
        const day = date.getDate();
        const year = date.getFullYear();
        const time = isAvailable ? "12:00 AM" : "11:59 PM";
        return `${month} ${day}, ${year} at ${time}`;
    }
    const handleDeleteAssignment = async (assignmentId: string) => {
    await assignmentsClient.deleteAssignment(assignmentId);
    dispatch(deleteAssignmentAction(assignmentId));
   };
    useEffect(() => {
    if (!cid) return;
    const fetchAssignments = async () => {
    const data = await assignmentsClient.findAssignmentsForCourse(cid);
    dispatch(setAssignments(data));
    };
    fetchAssignments();
   }, [cid]);

    return (
        <div id="wd-assignments">
            {/*<InputGroup placeholder="Search for Assignments" id="wd-search-assignment" />*/}
            <InputGroup size="lg" className="me-1 float-right" id="wd-search-assignment"> 
                <InputGroup.Text id="wd-search-assignment-icon"> 
                    <FaSearch />
                </InputGroup.Text>
                <FormControl placeholder="Search for Assignments" /> 
        
        {isFaculty && (
            <>
                <Button variant="secondary" size="lg" className="me-1 float-end" id="wd-add-assignment-group"> 
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> 
                    Group 
                </Button>
                <Button variant="danger" size="lg" className="me-1 float-end" id="wd-add-assignment"
                    onClick={() => navigate(`/Kambaz/Courses/${cid}/Assignments/Editor`)}> 
                    <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> 
                    Assignment 
                </Button>
                </>
        )}
            </InputGroup> 
            <br/><br/>
{/*Assignment  */}
            
            <ListGroup className="rounded-0" id="wd-assignments-group">
                <ListGroup.Item className="assignments p-0 mb-0 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />ASSIGNMENTS
                        {isFaculty && (
                        <AssignmentControl assignmentId="assignments-group" deleteAssignment={() => {}} /> 
                        )}
                        <span className="me-1 float-end d-flex align-items-center" id="wd-add-assignment-group"> 
                            <span className="border rounded-pill px-2 py-1 me-2">
                            40% of Total </span>
                            {isFaculty && 
                            <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> }
                        </span>
                    </div>
                </ListGroup.Item>

                {filteredAssignments.map((assignment: any) => (
                    <ListGroup.Item key={assignment._id} className="wd-assignment-list-item p-3 ps-2 d-flex align-items-center mb-0 wd-assignment-group">
                        <div className="d-flex me-3">
                            <BsGripVertical className="me-2 fs-4" />
                            <LuNotebookPen className="fs-4 text-success"/>   
                        </div>
                        <div>
                            <div className="fw-bold mb-0">
                                <Link to={`/Kambaz/Courses/${cid}/Assignments/${assignment._id}`} className="wd-assignment-link d-block mb-0 text-dark"> 
                                {assignment.title || assignment._id}</Link>
                            </div>
                            <div className="fs-6 text-danger">
                                Multiple Modules <span className="text-dark">| <b>Not available until</b> {formatDate(assignment.availableFromDate, true)} | <b>Due</b> {formatDate(assignment.availableUntilDate)} | {assignment.points}pts </span>
                            </div></div>
                        {isFaculty && (
                        <div className="ms-auto"><AssignmentControl assignmentId={assignment._id} 
                            deleteAssignment={handleDeleteAssignment} /></div>
                        )} 
                    </ListGroup.Item>
                ))}
             
            </ListGroup>
            
                
            <ListGroup className="rounded-0 mt-4" id="wd-assignments-projects">
                <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />PROJECTS
                        {isFaculty && <AssignmentControl assignmentId="projects-group" deleteAssignment={() => {}} />}
                        <span className="me-1 float-end" id="wd-add-assignment-group"> 
                            30% of Total 
                            {isFaculty && <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> }
                        </span>
                    </div>
                </ListGroup.Item>
            </ListGroup>  
            
            <ListGroup className="rounded-0" id="wd-assignments-exams">
                <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />EXAMS
                        {isFaculty && <AssignmentControl assignmentId="exams-group" deleteAssignment={() => {}} />}
                        <span className="me-1 float-end" id="wd-add-assignment-group"> 
                            15% of Total 
                            {isFaculty && <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> }
                        </span>
                    </div>
                </ListGroup.Item>
            </ListGroup> 

            <ListGroup className="rounded-0" id="wd-assignments-exams">
                <ListGroup.Item className="wd-assignments p-0 mb-5 fs-5 border-gray">
                    <div className="wd-title p-3 ps-2 bg-secondary">
                        <BsGripVertical className="me-2 fs-3" />QUIZZES
                        {isFaculty && <AssignmentControl assignmentId="quizzes-group" deleteAssignment={() => {}} />}
                        <span className="me-1 float-end" id="wd-add-assignment-group"> 
                            15% of Total 
                            {isFaculty && <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} /> }
                        </span>
                    </div>
                </ListGroup.Item>
            </ListGroup> 
            
            
        
        </div>
    );
}