import React from "react";
import Hero from "./Body.js"

function handleClick(potato){
  alert(potato)
}

function Information(props){
    return props.heroArray.map((item, i)=>{
console.log(item);
      return <Hero superhero = {item.superhero}
                   power = {item.power}
                   realname = {item.realname}
                   picture = {item.picture}
                   pudding = {item.pudding}
                   comment = {item.pudding.sauce}
                   pic = {item.pudding.spaghetti}
                   click = {handleClick}/>
                });
}

export default Information;
