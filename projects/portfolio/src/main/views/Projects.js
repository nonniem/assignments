import React from "react";

function Projects(){
    const style = {
        padding: "10px",
        alignContent: "center",
        margin: "auto",
        letterSpacing: ".01em",
        borderLeft: "solid black 1px",
        borderRight: "solid black 1px",
        marginLeft: "20px",
        marginRight: "20px",
        background: "rgba(150, 170, 179, .5)",
        color: "white",
    }

    const styles = {
        height: "100vh",
        marginBottom: "20px",
        borderTop: "solid black 1px ",
        size: "2em",

    }

    return(

        <div style={styles}>

            <div style={style}>
                <a href="http://nonniemarion.surge.sh">Mario Pest Control</a>
                <img src='' alt=""/>
            </div>

            <div style={style}>
                <a href="http://nonniestodolist.surge.sh">Todo List</a>
                <img src='' alt=""/>
            </div>

            <div style={style}>
                <a href="http://nonniestopwatch.surge.sh">Stopwatch from scratch</a>
                <img src='' alt=""/>
            </div>

            <div style={style}>
                <a href="http://nonniesmemese.surge.sh">Make some Memes</a>
                <img src='' alt=""/>
            </div>

            <div style={style}>
                <a href="http://flowartss.surge.sh">Flowarts</a>
                <img src='' alt=""/>
            </div>

            <div style={style}>
                <a href="">Chatter</a>
                <img src='' alt=""/>
            </div>

        </div>
    )
}

export default Projects;
