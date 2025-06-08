import { Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client";


export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector(
        (state: any) => state.accountReducer);
    
    const updateProfile = async () => { 
        const updatedProfile = await client.updateUser(profile); 
        dispatch(setCurrentUser(updatedProfile)); 
    };

    const fetchProfile = () => {
        if (!currentUser)
        return navigate("/Kambaz/Account/Signin");
        setProfile(currentUser);
    };
    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));
        navigate("/Kambaz/Account/Signin");
    };
    useEffect(() => { fetchProfile(); }, []);

    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            {profile && ( 
                <div>
                
            <Form.Control defaultValue={profile.username} id="wd-username" className="mb-2" placeholder="username"
                onChange={(e) => 
                setProfile({ ...profile, username: e.target.value })}/>
            <Form.Control defaultValue={profile.password} id="wd-password" className="mb-2" placeholder="password"
                onChange={(e) =>
                setProfile({...profile, password:  e.target.value })}/>
            <Form.Control defaultValue={profile.firstName} id="wd-firstname" className="mb-2" placeholder="First Name"
                onChange={(e)=> 
                setProfile({...profile, firstName: e.target.value })}/>
            <Form.Control defaultValue={profile.lastName} id="wd-lastname" className="mb-2" placeholder="Last Name"
                onChange={(e) => 
                setProfile({...profile, lastName:  e.target.value })} />
            <Form.Control defaultValue={profile.dob} id="wd-dob" className="mb-2" 
                onChange={(e) =>        
                setProfile({ ...profile, dob: e.target.value })} type="date" />
            <Form.Control defaultValue={profile.email} placeholder="alice@wonderland" onChange={
                (e) => setProfile({ ...profile, email: e.target.value })} type="email" id="wd-email" className="mb-2"/>
            <select onChange={(e) => setProfile({
                ...profile, role:  e.target.value })}
                id="wd-role" className="form-control mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <br />
            <button onClick={updateProfile} className="btn btn-primary w-100 mb-2"> Update </button>
            <button onClick={signout} className="wd-signout-btn btn btn-danger w-100" id="wd-signout-btn"> Sign out </button>
            
        {/*    <Link to="/Kambaz/Account/Signin" id="wd-signin-link" className="btn btn-primary w-100 mb-2">Sign out</Link>
        */}
        </div>
        )}
        </div>
    );
}
    
