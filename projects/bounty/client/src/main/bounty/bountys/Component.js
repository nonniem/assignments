import React from "react";
import {connect} from "react-redux";
import {bounty} from "../../../redux/actions/";
import EditContainer from "./edit-form/Container";

function BountyComponent(props){
    return(
        <div>
                <h4>{props.bountyd.title}</h4>
                <h4>{props.bountyd.description}</h4>
                <h4>{props.bountyd._id}</h4>
                <button onClick={()=>{props.deleteBounty(props.bounty._id)}}>Delete</button>
                <EditContainer
                    bountyId={props.bounty._id}
                                            />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        bounty: state.bounty
    }
}

export default connect(mapStateToProps, bounty)(BountyComponent);
