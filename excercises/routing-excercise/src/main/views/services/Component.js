import React from "react";
import {Switch, Route} from "react-router-dom";
import Service from "./views/Service";

function Services(props){
  let searchById= props.searchById;
  return(
    <div>
          <div className="butt">
            {props.genLinks()}
          </div>
          <div>
            <Switch>
              <Route path="/services/:id" render={(props)=>{
                  return(
                    <Service searchById={searchById}{...props}/>
                  )
                }}/>
            </Switch>
          </div>
    </div>
  )
}

export default Services;
