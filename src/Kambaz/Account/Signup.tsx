// import React from "react";
import { Form } from "react-bootstrap";
import{ Link } from "react-router-dom";

export default function Signup() {
    return (
        <div id="wd-signup-screen">
            <h1>Sign up</h1>
            <Form.Control id="wd-username" placeholder="username" className="mb-2" defaultValue="alice@outlook.com"/>
            <Form.Control id="wd-password" placeholder="password" type="password" className="mb-2" defaultValue="ABcd1234"/>
            <Form.Control id="wd-password-verify" placeholder="verify password" type="password" className="mb-2" />
            <Link to="/Kambaz/Account/Profile" id="wd-profile-link" className="btn btn-primary w-100 mb-2">Sign up</Link> <br />
            <Link to="/Kambaz/Account/Signin" id="wd-signin-link" className="btn btn-primary w-100 mb-2"> Sign in</Link> 
        </div>
    );
}
        
    