import React from "react";
import Meme from "./images/meme.png";
import Flowarts from "./images/flowarts.png";
import Mario from "./images/mario.png";
import TodoList from "./images/todolist.png";
import Stopwatch from "./images/stopwatch.png";
import Chatter from "./images/chatter.png";


function Projects(){
    const styles = {
        height: "100vh",
        marginBottom: "20px",
        borderTop: "solid black 1px ",
        size: "2em",
        overflowY: "auto",
        display: "block",
        margin: "auto"
    }

    const imageContainer = {
        maxWidth: "80%",
        maxHeight: "500px",
        float: "right",
        border: "1px black solid"
    }

    const hrefLink = {
        fontSize: "1.5em",
        color: "snow",
        letterSpacing: "1px",
        textShadow: "-1px 0 black, 0 1px black, 0 0 black, 0 0 black",
    }

    return(

        <div style={styles}>

            <div className="style">
                <a style={hrefLink} href="https://chatterin.herokuapp.com">Chatter</a>
                <img style={imageContainer} src={Chatter} alt=""/>
            </div>


            <div className="style">
                <a style={hrefLink} href="https://flowarts.herokuapp.com/">Flowarts</a>
                <img style={imageContainer} src={Flowarts} alt="flowarts"/>
            </div>

            <div className="style">
                <a style={hrefLink} href="http://nonniestodolist.surge.sh">Todo List</a>
                <img style={imageContainer} src={TodoList} alt=""/>
            </div>

            <div className="style">
                <a style={hrefLink} href="http://nonniesmemese.surge.sh">Memes</a>
                <img style={imageContainer} src={Meme} alt=""/>
            </div>

            <div className="style">
                <a style={hrefLink} href="http://nonniestopwatch.surge.sh">Stopwatch</a>
                <img style={imageContainer} src={Stopwatch} alt=""/>
            </div>

            <div className="style">
                <a style={hrefLink} href="http://nonniemarion.surge.sh">Mario Calculator</a>
                <img style={imageContainer} src={Mario} alt="Meme Making website"/>
            </div>

        </div>
    )
}

export default Projects;
