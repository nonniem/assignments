import React from "react";
import {Link} from "react-router-dom";

function Navbar(props){
const style = {
    color: "white",

}

    return(
        <div>
            <div className="backgrownd">
                <div className="nav">
                    <Link to="/projects" style={style}>Project Portfolio</Link>
                    <Link to="/" style={style}>Bio</Link>

                </div>
            </div>
        </div>
    )
}

export default Navbar;
