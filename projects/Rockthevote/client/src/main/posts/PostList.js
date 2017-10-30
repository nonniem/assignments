import React from "react";
import {connect} from "react-redux";
import {politics} from "../../redux/actions/";
import PoliticsComponent from "./likes/Component";

class PostList extends React.Component{
    constructor(){
        super();
        this.genList = this.genList.bind(this);
    }

    genList(){
        return this.props.politics.map((post, index)=>{
            return <PoliticsComponent
                    key={post.title + index}
                    index={index}
                    post={post}/>
        })
    }
    componentDidMount(){
        this.props.loadPost()
    }

    render(){
        return(
            <div>
                {this.genList()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        politics: state.politics
    }
}

export default connect(mapStateToProps, politics)(PostList);
