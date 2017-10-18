import React from "react";
import {Link} from "react-router-dom";
import ServicesComponent from "./Component.js"
import axios from "axios";
const pokeurl = "http://pokeapi.co/api/v2/pokemon?limit=150"

class ServicesContainer extends React.Component{
      constructor(){
        super();
        this.state = {
          services: []
        }
          this.genLinks = this.genLinks.bind(this);
          this.searchById = this.searchById.bind(this);
      }

      componentDidMount(){
        this.setState({
          services:[{
            title: "spaghetti",
            price: 100,
            _id: "123jfdn"
          },{
            title: "murinara",
            price: 200,
            _id: "59kdfl1"
          },{
            title: "lettuce",
            price: 1030,
            _id: "12werwrwr"
          },{
            title: "taquitoos",
            price: 2030,
            _id: "23426346v"
          },{
            title: "garlic bread",
            price: 100,
            _id: "45353453"
          },{
            title: "lasagna",
            price: 20,
            _id: "6666666"
          },{
            title: "spaghetti",
            price: 100,
            _id: "123jfdn"
          },{
            title: "murinara",
            price: 200,
            _id: "59kdfl1"
          },{
            title: "lettuce",
            price: 1030,
            _id: "12werwrwr"
          },{
            title: "taquitoos",
            price: 2030,
            _id: "23426346v"
          },{
            title: "garlic bread",
            price: 100,
            _id: "45353453"
          },{
            title: "lasagna",
            price: 20,
            _id: "6666666"
          },{
            title: "spaghetti",
            price: 100,
            _id: "123jfdn"
          },{
            title: "murinara",
            price: 200,
            _id: "59kdfl1"
          },{
            title: "beef",
            price: 1030,
            _id: "12werwrwr"
          },{
            title: "cheese",
            price: 2030,
            _id: "23426346v"
          },{
            title: "garlic bread",
            price: 100,
            _id: "45353453"
          },{
            title: "lasagna",
            price: 20,
            _id: "6666666"
          },{
            title: "spaghetti",
            price: 100,
            _id: "123jfdn"
          },{
            title: "murinara",
            price: 200,
            _id: "59kdfl1"
          },{
            title: "lettuce",
            price: 1030,
            _id: "12werwrwr"
          },{
            title: "taquitoos",
            price: 2030,
            _id: "23426346v"
          },{
            title: "garlic bread",
            price: 100,
            _id: "45353453"
          },{
            title: "lasagna",
            price: 20,
            _id: "6666666"
          },{
            title: "spaghetti",
            price: 100,
            _id: "123jfdn"
          },{
            title: "grapes",
            price: 200,
            _id: "59kdfl1"
          },{
            title: "pineapple",
            price: 1030,
            _id: "12werwrwr"
          },{
            title: "eggs",
            price: 2030,
            _id: "23426346v"
          },{
            title: "garlic bread",
            price: 100,
            _id: "45353453"
          },{
            title: "beans",
            price: 20,
            _id: "6666666"
          },{
            title: "spaghetti",
            price: 100,
            _id: "123jfdn"
          },{
            title: "murinara",
            price: 200,
            _id: "59kdfl1"
          },{
            title: "lettuce",
            price: 1030,
            _id: "12werwrwr"
          },{
            title: "taquitoos",
            price: 2030,
            _id: "23426346v"
          },{
            title: "garlic bread",
            price: 100,
            _id: "45353453"
          },{
            title: "lasagna",
            price: 20,
            _id: "6666666"
          },{
            title: "olives",
            price: 100,
            _id: "123jfdn"
          },{
            title: "sushi",
            price: 200,
            _id: "59kdfl1"
          },{
            title: "lettuce",
            price: 1030,
            _id: "12werwrwr"
          },{
            title: "fruit roll up",
            price: 2030,
            _id: "23426346v"
          },{
            title: "spaGhetti o",
            price: 100,
            _id: "45353453"
          },{
            title: "lasagna",
            price: 20,
            _id: "6666666"
          },{
            title: "spaghetti",
            price: 100,
            _id: "123jfdn"
          },{
            title: "murinara",
            price: 200,
            _id: "59kdfl1"
          },{
            title: "lettuce",
            price: 1030,
            _id: "12werwrwr"
          },{
            title: "sours",
            price: 2030,
            _id: "23426346v"
          },{
            title: "taco",
            price: 100,
            _id: "45353453"
          },{
            title: "peas",
            price: 20,
            _id: "6666666"
          },{
            title: "beans",
            price: 100,
            _id: "123jfdn"
          },{
            title: "bears",
            price: 200,
            _id: "59kdfl1"
          },{
            title: "oats",
            price: 1030,
            _id: "12werwrwr"
          },{
            title: "asspairagus",
            price: 2030,
            _id: "23426346v"
          },{
            title: "mushrooms",
            price: 100,
            _id: "45353453"
          },{
            title: "cabbage",
            price: 20,
            _id: "6666666"
          }]
        })
      }

      searchById(id){
          return this.state.services.find((service)=>{
            return id === service._id
          });
      }

      genLinks(){
        return this.state.services.map((service)=>{
          return <Link
                    key={service._id}
                    to={`/services/${service._id}`}>{service.title}</Link>

        })
      }
      render(){
    return(
            <ServicesComponent genLinks={this.genLinks}
                               searchById={this.searchById}/>
)
  }
}

export default ServicesContainer
