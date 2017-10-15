import React from "react";
import Lemmings from "./Lemmings.js";

class App extends React.Component {
    constructor() {
      super();
      this.state = {
        lemmingsKilled: 0
      }
      this.killALemming = this.killALemming.bind(this);
      this.saveALemming = this.saveALemming.bind(this);
    }

  killALemming(){
    this.setState(prevState => {
      return {
        lemmingsKilled: prevState.lemmingsKilled + 1
      }
    })
  }
  saveALemming(){
    this.setState(prevState => {
      return {
        lemmingsKilled: prevState.lemmingsKilled - 1
      }
    })
  }

  render() {
    return (
      <div>
      <Lemmings lemmingsKilled = {this.state.lemmingsKilled}
                saveALemming = {this.saveALemming}
                killALemming = {this.killALemming}
                />

      </div>
    )
  }
}

export default App;
