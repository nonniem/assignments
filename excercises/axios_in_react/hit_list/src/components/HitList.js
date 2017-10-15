import React from "react";
import HitListComponent from "./HitListComponent";
import axios from "axios";


class HitList extends React.Component{
    constructor(){
        super()
        this.state = {
            killed: []
        }
    }
    componentDidMount(){
        axios.get("http://api.vschool.io:6543/hitlist.json").then((response)=>{
            console.log(response.data)
            this.setState(()=>{
               return {
                 killed: response.data
               }
            })
        })
    }

    render(){
        let killah = this.state.killed.map((hitlist)=>{
              return <HitListComponent name={hitlist.name}
                                       image={hitlist.image}
                                                            />
        })
        return killah;
    }
}

export default HitList;
