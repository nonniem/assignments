import React from "react";
import ResumeImg from "./images/Resume.png";


export default function Resume(){
    const resumeImgStyle = {
        maxWidth: "100%",
        margin: "auto" ,
        display: "block",
        marginTop: "10px",
        marginBottom: "10px"
    }

    return(
        <div>
            <a href="https://docs.google.com/document/d/1uvunutUBZ7CB1YgsosD7kFU5Gs7MTMbtDNXX4Qk4F-c/edit">
                <img style={resumeImgStyle} src={ResumeImg} alt="resume"/>
            </a>
        </div>
    )
}
