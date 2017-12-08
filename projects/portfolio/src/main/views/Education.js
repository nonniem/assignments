import React from "react";
import vSchool from "./images/vschool.png";
import atomImg from "./icons/atom.png";
import bootstrapImg from "./icons/bootstrap.png";
import bracketsImg from "./icons/brackets.png";
import expressImg from "./icons/express.png";
import githubImg from "./icons/github.png";
import htmlcssImg from "./icons/htmlcss.png";
import js6Img from "./icons/js6.png";
import mongodbImg from "./icons/mongodb.png";
import nodejsImg from "./icons/node.png";
import npmImg from "./icons/npm.png";
import reactjsImg from "./icons/reactjs.png";
import reduxImg from "./icons/redux.png";
import socketImg from "./icons/socket.png";
import uwfoxImg from "./icons/uwfox.png"
import appletonnorthImg from "./icons/appletonnorth.png";

export default function Education(){
    const divStyle = {
        color: "black",
        background: "rgba(0, 0, 0, 0.5)",
        width: "80%",
        margin: "auto",
        padding: "10px"
    }

    const infoStyle = {
        textAlign: "center",
        background: "rgba(255,255,255, 0.8)",
        margin: "10px"
    }

    const infoStyle2 = {
        textAlign: "center",
        background: "rgba(255,255,255, 0.8)",
        margin: "10px"
    }

    const vschoolImg = {
        maxWidth: "46%",
        border: "black 1px solid",
        paddingRight: "3%",
        marginTop: "3px",
        borderRadius: "6%",
        padding: "5px"
    }

    const iconBar = {
        width: "100%",

        height: "10%",

    }

    const iconSpecs = {
        maxWidth: "7%",
        padding: "2px"
    }

    const iconSpecs2 = {
        maxWidth: "12%",
        padding: "2px"
    }

    const uwFox = {
        maxWidth: "44%",
        padding: "5px"
    }

    const aNorth = {
        maxWidth: "8%"
    }

    return(
        <div style={divStyle}>
            <div style={infoStyle}>
                <img style={vschoolImg} src={vSchool} alt=""/>
                <h3>Full Stack Web Development course MERN stack
                </h3>
                <div style={iconBar}>
                    <img style={iconSpecs} src={reactjsImg} alt=""/>
                    <img style={iconSpecs} src={reduxImg} alt=""/>
                    <img style={iconSpecs2} src={htmlcssImg} alt=""/>
                    <img style={iconSpecs} src={js6Img} alt=""/>
                    <img style={iconSpecs} src={mongodbImg} alt=""/>
                    <img style={iconSpecs} src={nodejsImg} alt=""/>
                    <img style={iconSpecs} src={expressImg} alt=""/>
                    <img style={iconSpecs} src={npmImg} alt=""/>
                    <img style={iconSpecs} src={githubImg} alt=""/>
                    <img style={iconSpecs} src={bootstrapImg} alt=""/>
                    <img style={iconSpecs} src={atomImg} alt=""/>
                    <img style={iconSpecs} src={bracketsImg} alt=""/>
                    <img style={iconSpecs} src={socketImg} alt=""/>
                </div>

            </div>
            <div style={infoStyle}>
                <img style={uwFox} src={uwfoxImg} alt=""/>
                <h3>University of Fox Valley</h3>
                <h6>Only attended one semester</h6>
                <li>Ethics, Anthropology, Psychology, English</li>
            </div>
            <div style={infoStyle2}>
                <img style={aNorth} src={appletonnorthImg} alt=""/>
                <h3>Appleton North Highschool</h3>
                    <li>Appleton North Career Academy</li>
                    <li>High School Diploma</li>
            </div>
        </div>
    )
}
