import React from "react";
import FormContainer from "./form/Container";
import TodosContainer from "./todos/Container";

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
          <FormContainer/>
          <TodosContainer/>
    );
  }
}

export default App;
