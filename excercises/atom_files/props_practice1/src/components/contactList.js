import React from "react";
import Welcome from "./Welcome.js";



function ContactList(props){
  const contactArray = props.contactArray.map((item, i)=>{

    return <Welcome breed={item.breed}
                    name={item.name}
                    weight={item.weight}
                    img={item.imagelinkity}
                    msg={item.message}/>

                    });
  return contactArray
}

export default ContactList;
