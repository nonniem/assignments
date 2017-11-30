import React from "react";

function Contact(props){
    const style={
        padding: "10px",
        paddingTop: "10px",
        paddingLeft: "40px",
        paddingRight: "40px",
        fontSize: "15px",
        textAlign: "center",
        background: "rgba(150, 170, 179, .5)",
        color: "white"
    }

    const contactMethods = {
        height: "45px",
        width: "245px",
        background: "rgba(150, 170, 179, .5)",
        color: "white",
        position: "relative",
        margin: "auto",
        borderLeft: "solid white 1px"

    }

    const personalBio={
        padding: "10px",
        paddingTop: "10px",
        paddingLeft: "40px",
        paddingRight: "40px",
        fontSize: "15px",
        textAlign: "center",
        background: "rgba(150, 170, 179, .5)",
        color: "white",
        width: "80%",
        margin: "auto",
        borderRight: "solid white 1px",
        borderLeft: "solid white 1px",
    }

    return(

    <div>
        <div>
            <h2 style={style}>Personal Bio</h2>
            <h5 style={personalBio}>My name is Nonnie Martin. I grew up in Appleton,
            and moved to Utah four years ago. I love to snowboard and be outside,
            but i spend my days inside learning to code. I have experience with React,
            JS, Node, Mongodb, and CS3. I enjoy designing websites and laying out there
            user interface and how they will be interacting with the site. I have a passion
            to do things differently and want to make something my own. Currently diving into
            the coding world hearfirst... no lifevest</h5>
        </div>

        <div className="contactInfo">
                <h3 style={style}>Contact info.</h3>
            <div style={contactMethods}>
                <li>Email: martin.nonnie@gmail.com</li>
                <li>Phone #: 920-740-3262</li>
            </div>
        </div>
    </div>
    )
}

export default Contact;
