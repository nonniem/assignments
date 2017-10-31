import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import {Switch, Route} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import ProjectContainer from "./views/projects/Container.js";

class App extends React.Component{
    render(){
        return(
        <div class="container">
            <div class="row">
                <div class="col-xs-12">
                    <Navbar/>
                </div>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/projects" component={About}/>
                        <Route path="/contact" component={Contact}/>
                        <Route path="/about" component={ProjectContainer}/>
                    </Switch>
                </div>
                <Footer/>
            </div>
        </div>
        )
    }
}

export default App;
