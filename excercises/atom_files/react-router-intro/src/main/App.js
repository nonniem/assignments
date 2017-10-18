import React from "react";
import Navbar from "./Navbar.js";
import {Switch, Route} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import Services from "./views/Services";
class App extends React.Component{
  render(){
    return(
            <div className="app-wrapper">
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/About" component={About}/>
                    <Route path="/Contact" component={Contact}/>
                    <Route path="/Services" component={Services}/>
                </Switch>
            </div>
    )
  }
}

export default App;
