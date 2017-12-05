import React from "react";

function Contact(props){
    const titleStyle = {
        padding: "10px",
        paddingTop: "10px",
        paddingLeft: "40px",
        paddingRight: "40px",
        fontSize: "15px",
        textAlign: "center",
        letterSpacing: "1.3px",
        wordSpacing: "1px",
        background: "rgba(150, 170, 179, .9)",
        color: "snow",
        width: "40%",
        margin: "auto",
        marginTop: "10px",
        marginBottom: "10px",
        borderRadius: "15%",
        borderTop: "snow 1px solid",
        borderBottom: "snow 1px solid",
        maxWidth: ""
    }

    const contactMethods = {
        height: "50px",
        width: "275px",
        background: "rgba(150, 170, 179, .9)",
        color: "snow",
        position: "relative",
        margin: "auto",
        borderLeft: "solid white 1px",
        letterSpacing: "1.3px",
        wordSpacing: "1px",
        padding: "5px"
    }

    const personalBio = {
        padding: "10px",
        paddingTop: "10px",
        paddingLeft: "40px",
        paddingRight: "40px",
        fontSize: "15px",
        textAlign: "center",
        background: "rgba(150, 170, 179, .9)",
        color: "snow",
        width: "80%",
        margin: "auto",
        borderRight: "solid white 1px",
        borderLeft: "solid white 1px",
        letterSpacing: "1.3px",
        wordSpacing: "1px",
        maxWidth: "666px",
        borderRadius: "2%",
    }

    const indentd = {
        paddingLeft: "15px"
    }

    return(

    <div>
        <div>
            <h2 style={titleStyle}>Personal Bio</h2>
            <div style={personalBio}>
                <span style={indentd}>Hello, welcome to my portfolio. My name is Nonnie. I grew up in Appleton, Wisconsin
                and moved to Utah four years ago. <br/>I love to snowboard and be outside,
                but i spend most of my time inside writing code. I have experience with React,
                JS6, NodeJs, MongoDb, and CS3. I enjoy designing websites and planning
                a users experience while visiting my website. I have a passion
                to do things differently and want to make something my own.
                Currently diving into
                the coding world headfirst... no lifevest. Thank you for visiting.</span>
            </div>

        </div>

        <div className="contactInfo">
                <h3 style={titleStyle}>Contact information</h3>
            <div style={contactMethods}>
                <li>Email: martin.nonnie@gmail.com</li>
                <li>Phone #: 920-740-3262</li>
            </div>
        </div>
    </div>
    )
}

export default Contact;
