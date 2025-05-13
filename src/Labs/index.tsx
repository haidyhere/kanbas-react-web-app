import Lab1 from "./Lab1";
import {Route, Routes, Navigate} from "react-router-dom";
import TOC from "./TOC";
import Lab2 from "./Lab2";
import Lab3 from "./Lab3";
export default function Labs() {
    return (
        <div id="wd-labs">
            <h1>Labs</h1>
            <p>Hongjing Ren</p>
            <p>Section: Summer 1, 2025</p>
            <div id="wd-github">
                <a href="https://github.com/haidyhere/kanbas-react-web-app.git" id="wd-github">GitHub</a>
            </div>
            
            <TOC />
            <Routes>
                <Route path="/" element={<Navigate to="Lab1" />} />
                <Route path="Lab1" element={<Lab1 />} />
                <Route path="Lab2/*" element={<Lab2 />} />
                <Route path="Lab3/*" element={<Lab3 />} />

            </Routes>
            
        </div>
    );
}