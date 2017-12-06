import React from "react";

export default function Education(){
    const divStyle = {
        color: "snow",
        background: "rgba(0, 0, 0, 0.5)",
        width: "80%",
        margin: "auto"
    }

    const infoStyle = {
        textAlign: "center"
    }

    return(
        <div style={divStyle}>
            <div style={infoStyle}>
                <h2>V School</h2>
                <li>Full Stack Web Development</li>

            </div>
            <div style={infoStyle}>
                <h3>University of Fox Valley</h3>
                <h6>Only attended one semester</h6>
                <li>Ethics, Anthropology, Psychology, English</li>
            </div>
            <div style={infoStyle}>
                <h3>Appleton North Highschool</h3>
                    <li>Appleton North Career Academy</li>
                    <li>High School Diploma</li>
            </div>
        </div>
    )
}
