import { Form } from "react-bootstrap";
import {Link} from "react-router-dom";
export default function Signin() {
    return (
        <div id="wd-signin-screen">
            <h1>Sign in</h1>
            <Form.Control id="wd-username" placeholder="username" className="mb-2" defaultValue="Alice"/>
            <Form.Control id="wd-password" placeholder="password" type="password" className="mb-2" defaultValue="123456ABA7"/>
            <Link to="/Kambaz/Account/Profile" id="wd-signin-btn" className="btn btn-primary w-100 mb-2"> Sign in</Link>
            <Link to="/Kambaz/Account/Signup" id="wd-signup-link" className="btn btn-primary w-100 mb-2"> Sign up</Link>
        </div>

        
    );
}