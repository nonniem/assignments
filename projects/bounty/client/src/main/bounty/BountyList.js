import React from "react";
import {connect} from "react-redux";
import {bounty} from "../../redux/actions/";
import BountyComponent from "./bountys/Component.js";

class BountyList extends React.Component{
    constructor(){
        super();
        this.genList = this.genList.bind(this);
    }

    genList(){
        return this.props.bounty.map((bounty, index)=>{
            return <BountyComponent
                     key={bounty.title + index}
                     index={index}
                     bountyd={bounty}/>
        })
    }

    componentDidMount(){
        this.props.loadBounty()
    }

    render(){
        console.log(this.props);
            return(
                <div>
                    {this.genList()}
                </div>
            )
      }
}

const mapStateToProps = (state)=>{
    return {
        bounty: state.bounty
    }
}

export default connect(mapStateToProps, bounty)(BountyList)
