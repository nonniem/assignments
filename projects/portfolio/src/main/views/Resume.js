import React from "react";
import resumeImg1 from "./images/Resume.jpeg";
import resumeImg2 from "./images/Resume.jpeg";

export default function Resume(){
    return(
        <div>
            <img src={resumeImg1} alt="resume"/>
            <img src={resumeImg2} alt="resume"/>
        </div>
    )
}
