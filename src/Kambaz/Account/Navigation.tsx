import { ListGroup } from "react-bootstrap";
import { Link, useLocation  } from "react-router-dom";
import { useSelector } from "react-redux";


export default function AccountNavigation() {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const links = currentUser ? ["Profile"]: ["Signin", "Signup"];
    const { pathname } = useLocation();
    const active = (path: string) => pathname.includes(path) ? "active" : "";

    return (
        <ListGroup id="wd-account-navigation" style={{ width: 120 }} className="rounded-0 bottom-0 top-0 d-none d-md-block bg-black z-2 list-group">
            {links.map((link) => (
                <ListGroup.Item 
                    key={link}
                    to={`/Kambaz/Account/${link}`} 
                    as={Link} 
                    className={`text-center border-0 ${
                        pathname.includes(`/Account/${link}`) 
                            ? 'text-danger' 
                            : 'bg-white text-black'
                    }`}
                    style={{ 
                        borderLeft: pathname.includes(`/Account/${link}`) 
                            ? "3px solid red" 
                            : "3px solid black" 
                    }}
                    action
                >
                    {link === "Signin" ? "Sign In" : link === "Signup" ? "Sign Up" : link}
                </ListGroup.Item>
            ))}
            {currentUser && currentUser.role === "ADMIN" && ( 
                <Link to={`/Kambaz/Account/Users`} className={`list-group-item ${active("Users")}`}> Users </Link> )}
        </ListGroup>
                
        
    );
}