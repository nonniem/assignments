import React from "react";

function About(props){
    const style={
        paddingTop: "10px",
        paddingLeft: "20px",
        paddingRight: "20px",
        fontSize: "15px",
        textAlign: "center"
    }
    return(
        <div className="bodyLayout">
                <h3 style={style}>My name is Nonnie Martin. I grew up in Appleton,
                and moved to Utah four years ago. I love to snowboard and be outside,
                but i spend my days inside learning to code. I have experience with React,
                JS, Node, Mongodb, and CS3. I enjoy designing websites and laying out there
                user interface and how they will be interacting with the site. I have a passion
                to do things differently and want to make something my own. Currently diving into
                the coding world hearfirst... no lifevest</h3>
        </div>
    )
}

export default About;
