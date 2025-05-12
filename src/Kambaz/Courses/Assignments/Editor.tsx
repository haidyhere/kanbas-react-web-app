
export default function AssignmentEditor() {
    return (
        <div id="wd-assignments-editor">
            <label htmlFor="wd-name">Assignment Name</label>
            <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />
            <textarea id="wd-description">
            The assignment is available online submit alink to the landing page of your Web application running on Netlify. The landing page should include the following: Your fullname and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a linkto navigate back to the landing page.
            </textarea>
            <br />
            <table>
                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-points">Points</label>
                    </td>
                    <td>
                        <input id="wd-points" value="100" />
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-group">Assignment Group</label>
                    </td>
                    <td>
                        <select id="wd-group" defaultValue="ASSIGNMENTS">
                            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            <option value="EXAMS">EXAMS</option>
                            <option value="QUIZZES">QUIZZES</option>
                            <option value="PROJECTS">PROJECTS</option>
                        </select>
                    </td>
                    
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-display-grade-as">Display Grade as</label>
                    </td>
                    <td>
                        <select id="wd-display-grade-as" defaultValue="Percentage">
                            <option value="ASSIGNMENTS">Percentage</option>
                            
                        </select>
                    </td>
                    
                </tr>

                <tr>
                    <td align="right" valign="top">
                        <label htmlFor="wd-submission-type">Submission Type</label>
                    </td>
                    <td>
                        <select id="wd-submission-type" defaultValue="Online">
                            <option value="ASSIGNMENTS">Online</option>
                            
                        </select>
                        <p>Online Entry Options</p>
                        <input type="checkbox" id="wd-text-entry" />
                        <label htmlFor="wd-text-entry">Text Entry</label><br />
                        <input type="checkbox" id="wd-website-url" />
                        <label htmlFor="wd-website-url">Website URL</label><br />
                        <input type="checkbox" id="wd-media-recordings" />
                        <label htmlFor="wd-media-recordings">Media Recordings</label><br />
                        <input type="checkbox" id="wd-student-annotation" />
                        <label htmlFor="wd-student-annotation">Student Annotation</label><br />
                        <input type="checkbox" id="wd-file-upload" />
                        <label htmlFor="wd-file-upload">File Uploads</label><br />

                        
                    </td>
                </tr>

                <tr>
                    <td align="right" valign="top"> <br />
                        <label htmlFor="wd-assign-to">Assign</label> 
                    </td>
                    <td>
                    <br />
                        <span>Assign to</span>
                        <input type="text" id="wd-assign-to" value="Everyone" /> <br />
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td>
                        <br />
                        <label htmlFor="wd-due-date">Due</label>
                        <input type="date" id="wd-due-date" value="2024-05-13" />
                    </td>
                </tr>
                
                <tr>
                    <td></td>
                    <td>
                        <br />
                        <label htmlFor="wd-available-from">Available From</label>
                        <input type="date" id="wd-available-from" value="2024-05-06" />
                        <label htmlFor="wd-available-until">Until</label>
                        <input type="date" id="wd-available-until" value="2024-05-20" />
                    </td>
                </tr>

                <tr>
                    <td></td>
                    <td align="right">
                        <br />
                        <button id="wd-name">Cancle</button>
                        <button id="wd-name">Save</button>
                    
                    </td>
                </tr>

                


            </table>
        </div>
    );
}