import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Body from "./Body";


class App extends React.Component{
    render(){
        return(
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <Navbar/>
                </div>
                <div>
                    <Body/>
                </div>
                <Footer/>
            </div>
        </div>
        )
    }
}

export default App;
