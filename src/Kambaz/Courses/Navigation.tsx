import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";

export default function CourseNavigation() {
    const { pathname } = useLocation();
    const { cid } = useParams();
    
    const links = [{label: "Home", path: `/Kambaz/Courses/${cid}/Home`}, 
        {label: "Modules", path: `/Kambaz/Courses/${cid}/Modules`}, 
        {label: "Piazza", path: `/Kambaz/Courses/${cid}/Piazza`}, 
        {label: "Zoom", path: `/Kambaz/Courses/${cid}/Zoom`}, 
        {label: "Assignments", path: `/Kambaz/Courses/${cid}/Assignments`}, 
        {label: "Quizzes", path: `/Kambaz/Courses/${cid}/Quizzes`}, 
        {label: "Grades", path: `/Kambaz/Courses/${cid}/Grades`}, 
        {label: "People", path: `/Kambaz/Courses/${cid}/People`}];
    return (
        <div id="wd-course-navigation" className="wd list-group fs-5 rounded-0 d-none d-md-block">
            {links.map((link) => {
                const isActive = pathname === link.path;
                return (
                    <Link to={link.path} id="wd-course-home-link" 
                        className={`list-group-item ${isActive ? "active" : "text-danger"} border border-0`}
                        key={link.label}>
                        {link.label}
                    </Link>
                        
                );
            })}
        </div>
        /*
            <Link to="/Kambaz/Courses/1234/Home" id="wd-course-home-link"
                className="list-group-item active border border-0">Home</Link>
            <Link to="/Kambaz/Courses/1234/Modules" id="wd-course-modules-link"
                className="list-group-item text-danger border border-0">Modules </Link>
            <Link to="/Kambaz/Courses/1234/Piazza" id="wd-course-piazza-link"
                className="list-group-item text-danger border border-0">Piazza</Link>
            <Link to="/Kambaz/Courses/1234/Zoom" id="wd-course-zoom-link"
                className="list-group-item text-danger border border-0">Zoom</Link>
            <Link to="/Kambaz/Courses/1234/Assignments" id="wd-course-quizzes-link"
                className="list-group-item text-danger border border-0"> Assignments</Link>
            <Link to="/Kambaz/Courses/1234/Quizzes" id="wd-course-assignments-link"
                className="list-group-item text-danger border border-0">Quizzes </Link>
            <Link to="/Kambaz/Courses/1234/Grades" id="wd-course-grades-link"
                className="list-group-item text-danger border border-0">Grades</Link>
            <Link to="/Kambaz/Courses/1234/People" id="wd-course-people-link"
                className="list-group-item text-danger border border-0">People</Link>
        </div>
        */
    );
}


