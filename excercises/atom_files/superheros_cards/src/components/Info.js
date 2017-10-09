import React from "react";
import Hero from "./Body.js"

function handleClick(potato){
  alert(potato)
}

function Information(props){
    return props.heroArray.map((item, i)=>{

      return <Hero superhero = {item.superhero}
                   power = {item.power}
                   realname = {item.realname}
                   picture = {item.picture}
                   pudding = {item.pudding}
                   click = {handleClick}/>
                });
}

export default Information;
