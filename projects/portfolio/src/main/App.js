import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Body from "./Body";

class App extends React.Component{
    render(){
        return(
        <div className="appBox">
                <Navbar/>
                <Body/>
                <Footer/>
        </div>
        )
    }
}

export default App;
