import { Link } from "react-router-dom";

export default function Dashboard() {
    return (
        <div id="wd-dashboard">
            <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
            <h2 id="wd-dashboard-published">Published Courses (12)</h2> <hr />
            <div id="wd-dashboard-courses">
                <div className="wd-dashboard-course">
                    <Link to="/Kambaz/Courses/1234/Home" className="wd-dashboard-course-link">
                        <img src="/images/react.jpg" width={200} />
                        <div>
                            <h5> CS1234 React JS</h5>
                            <p className="wd-dashboard-course-title">
                                Full Stack software developer
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>
                
                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/5001/Home" className="wd-dashboard-course-link">
                        <img src="/images/python.jpg" width={200} />
                        <div>
                            <h5>CS5001 Intro to Python</h5>
                            <p className="wd-dashboard-course-title">
                                Introduction to Python programming
                            </p>
                            <button> Go </button>
                        </div>  
                    </Link>
                </div>

                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/5002/Home" className="wd-dashboard-course-link">
                        <img src="/images/discrete.jpg" width={200} />
                        <div>
                            <h5>CS5002 Discrete Mathematics</h5>    
                            <p className="wd-dashboard-course-title">
                                Introduction to Discrete Mathematics
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/5003/Home" className="wd-dashboard-course-link">
                        <img src="/images/algorithm.jpg" width={200} />
                        <div>
                            <h5>CS5003 Algorithms</h5>
                            <p className="wd-dashboard-course-title">
                                Introduction to Algorithms
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/5004/Home" className="wd-dashboard-course-link">
                        <img src="/images/ai.jpg" width={200} />
                        <div>
                            <h5>CS5004 Artificial Intelligence</h5>
                            <p className="wd-dashboard-course-title">
                                Introduction to Artificial Intelligence
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/5005/Home" className="wd-dashboard-course-link">
                        <img src="/images/machinelearning.jpg" width={200} />
                        <div> 
                            <h5>CS5005 Machine Learning</h5>
                            <p className="wd-dashboard-course-title">
                                Introduction to Machine Learning
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>

                <div className="wd-dashboard-course"> 
                    <Link to="/Kambaz/Courses/5006/Home" className="wd-dashboard-course-link">
                        <img src="/images/network.jpg" width={200} />
                        <div>
                            <h5>CS5006 Network</h5>
                            <p className="wd-dashboard-course-title">
                                Introduction to Computer Networks
                            </p>
                            <button> Go </button>
                        </div>
                    </Link>
                </div>


            




            </div>
        </div>
    );
}