import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface ProtectedLinkProps {
    to: string;
    courseId: string;
    userEnrollments: string[];
    children: React.ReactNode;
    className?: string;
}

const ProtectedLink: React.FC<ProtectedLinkProps> = ({
    to,
    courseId,
    userEnrollments,
    children,
    className
}) => {
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY";
    const isEnrolled = userEnrollments.includes(courseId);

    
    if (isFaculty || isEnrolled) {
        return (
            <Link to={to} className={className}>
                {children}
            </Link>
        );
    }


    return (
        <div className={className} style={{ cursor: 'default' }}>
            {children}
        </div>
    );
};

export default ProtectedLink;