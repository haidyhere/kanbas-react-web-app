import { Button, FormControl } from "react-bootstrap";

import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setCurrentUser } from "./reducer";
import { useDispatch } from "react-redux";
//import * as db from "../Database";
import * as client from "./client";

export default function Signin() {
    const [credentials, setCredentials] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signin = async () => {
        const user = await client.signin(credentials);
        {/*}
    const user = db.users.find(
      (u: any) => u.username === credentials.username &&
                  u.password === credentials.password);
        */}
    if (!user) return;
    dispatch(setCurrentUser(user));
    navigate("/Kambaz/Dashboard");};

    return (
        <div id="wd-signin-screen">
            <h1>Sign in</h1>
            <FormControl defaultValue={credentials.username}
             onChange={(e) => setCredentials({
               ...credentials, username: e.target.value })}
             className="mb-2" placeholder="username" id="wd-username" />
            <FormControl defaultValue={credentials.password}
                    onChange={(e) => setCredentials({ ...credentials,
                    password: e.target.value })}
                    className="mb-2"
                    placeholder="password" type="password" id="wd-password"/>
            <Button onClick={signin} id="wd-signin-btn"
                    variant="primary" className="w-100" > Sign in </Button>
            <Link id="wd-signup-link" to="/Kambaz/Account/Signup">
                Sign up </Link>
{/*
            <Form.Control id="wd-username" placeholder="username" className="mb-2" defaultValue="Alice"/>
            <Form.Control id="wd-password" placeholder="password" type="password" className="mb-2" defaultValue="123456ABA7"/>
            <Link to="/Kambaz/Account/Profile" id="wd-signin-btn" className="btn btn-primary w-100 mb-2"> Sign in</Link>
            <Link to="/Kambaz/Account/Signup" id="wd-signup-link" className="btn btn-primary w-100 mb-2"> Sign up</Link>
        */}
            </div>

        
    );
}