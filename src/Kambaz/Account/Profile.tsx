import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";


export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { currentUser } = useSelector(
        (state: any) => state.accountReducer);
    const fetchProfile = () => {
        if (!currentUser)
        return navigate("/Kambaz/Account/Signin");
        setProfile(currentUser);
    };
    const signout = () => {
        dispatch(setCurrentUser(null));
        navigate("/Kambaz/Account/Signin");
    };
    useEffect(() => { fetchProfile(); }, []);

    return (
        <div id="wd-profile-screen">
            <h1>Profile</h1>
            {profile && ( <div>

            <Form.Control defaultValue={profile.username} id="wd-username" className="mb-2" 
                onChange={(e) => 
                setProfile({ ...profile, username: e.target.value })}/>
            <Form.Control defaultValue={profile.password} id="wd-password" className="mb-2"
                onChange={(e) =>
                setProfile({...profile, password:  e.target.value })}/>
            <Form.Control defaultValue={profile.firstName} id="wd-firstname" className="mb-2" 
                onChange={(e)=> 
                setProfile({...profile, firstName: e.target.value })}/>
            <Form.Control defaultValue={profile.lastName} id="wd-lastname" className="mb-2" 
                onChange={(e) => 
                setProfile({...profile, lastName:  e.target.value })} />
            <Form.Control defaultValue={profile.dob} id="wd-dob" className="mb-2" 
                onChange={(e) =>        
                setProfile({ ...profile, dob: e.target.value })} type="date" />
            <Form.Control defaultValue={profile.email} onChange={
                (e) => setProfile({ ...profile, email: e.target.value })} type="email" id="wd-email" className="mb-2"/>
            <select onChange={(e) => setProfile({
                ...profile, role:  e.target.value })}
                id="wd-role" className="form-control mb-2">
                <option value="USER">User</option>
                <option value="ADMIN">Admin</option>
                <option value="FACULTY">Faculty</option>
                <option value="STUDENT">Student</option>
            </select>
            <Button onClick={signout} className="w-100 mb-2" id="wd-signout-btn"> Sign out </Button>
            
        {/*    <Link to="/Kambaz/Account/Signin" id="wd-signin-link" className="btn btn-primary w-100 mb-2">Sign out</Link>
        */}
        </div>
        )}
        </div>
    );
}
    
