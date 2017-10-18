import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";
import {Switch, Route} from "react-router-dom";
import Home from "./views/Home";
import About from "./views/About";
import Contact from "./views/Contact";
import ServicesContainer from "./views/services/Container.js";

class App extends React.Component{
  render(){
    return(
      <div>
        <div className = "oranges">
          <Navbar/>
            </div>
              <div  className = "layout">
              <Switch>
                  <Route exact path="/" component={Home}/>
                  <Route path="/about" component={About}/>
                  <Route path="/contact" component={Contact}/>
                  <Route path="/services" component={ServicesContainer}/>
              </Switch>
            </div>
            <div>
          <Footer/>
      </div>
      </div>
    )
  }
}


export default App;
