import BackgroundColors from "./BackgroundColors";
import ForegroundColors from "./ForegroundColors";
import "./index.css";

export default function Lab2() {
    return (
        <div id="wd-lab2">
            <h2>Lab 2 - Cascading Style Sheets</h2>
            <p>Welcome to Lab2!</p>
            <h3>Styling with the STYLE attribute</h3>
            <p>
                Style attribute allows configuring look and feel
                right on the element. Although it's very convenient
                it is considered bad practice and you should avoid
                using the style attribute
            </p>
            <ForegroundColors />
            <BackgroundColors />
        </div>
    );
}