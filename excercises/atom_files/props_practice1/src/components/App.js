import React from "react";
import ContactList from "./contactList.js";
import ContactArray from "./index.json"

function App() {
  return(
    <div>
          <ContactList contactArray={ContactArray}/>
    </div>
  )
}

export default App;
