import { ListGroup } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function AccountNavigation() {
    return (
        <ListGroup id="wd-account-navigation" style={{ width: 120 }} className="rounded-0 bottom-0 top-0 d-none d-md-block bg-white z-2 list-group">
            <ListGroup.Item to={`/Kambaz/Account/Signin`} as={Link} className="text-center border-0 bg-white text-black" style={{ borderLeft: "3px solid black !important" }} action> 
                Signin</ListGroup.Item>
            <ListGroup.Item to={`/Kambaz/Account/Signup`} as={Link} className="text-center border-0 bg-white text-danger"> Signup </ListGroup.Item>
            <ListGroup.Item to={`/Kambaz/Account/Profile`} as={Link} className="text-center border-0 bg-white text-danger"> Profile </ListGroup.Item>
        </ListGroup>
            
        
    );
}