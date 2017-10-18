import React from "react";
import {connect} from "react-redux";
import Contact from "./Contact.js"
import {removeFirstContact} from "../../redux/actions/index.js";

function ContactList (props){

  const deleted = {
    marginLeft: "20px"
  }

  return(
        <div>
          <button style={deleted} onClick={props.removeFirstContact}>Delete Jerries</button>
            {props.contactList.map((contact, i)=>{
                return <Contact key={contact.firstName + i} contact={contact}
                              />
            })}
        </div>
  )
}
const mapStateToProps = (state)=>{
  return state
}

export default connect(mapStateToProps, {removeFirstContact})(ContactList);
