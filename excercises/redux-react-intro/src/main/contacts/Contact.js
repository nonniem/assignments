import React from "react";

function ContactList(props){
const style ={
  color: "white",
  marginLeft: "20px",
  border: "white solid 1px",
  borderRadius: "10%"
}
  return(
    <div style={style}>
        
        <h3>{props.contact.firstName}</h3>
        <h3>{props.contact.lastName}</h3>
        <h4>{props.contact.phone}</h4>
    </div>
  )
}

export default ContactList;
