import React from "react";
import CountriesComponent from "./Component";
import Country from "./Country";
import {connect} from "react-redux";

// /get list of coutrnies from redux this.state
//write a function that maps through the list and generates a new country component
//render the list component and pass maping function down, where it will be called
//add delete function to each country component

class CountriesContainer extends React.Component{
    constructor(){
      super();
      this.genList = this.genList.bind(this);
    }

    genList(){
      return this.props.countries.map((country, index)=>{
                  return <Country
                            key={country.name + index}
                            country={country}
                            index = {index}/>
        })

    }

    render(){
        return(
          <CountriesComponent
                  genList={this.genList}/>
        )
    }
}

const mapStateToProps = (state)=>{
  return {
    countries: state.countries
  }
}

export default connect(mapStateToProps, {})(CountriesContainer);
