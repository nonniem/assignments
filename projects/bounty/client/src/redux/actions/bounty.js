import axios from "axios";
let bountyUrl = "http://localhost:7500/bounty/";

export function loadBounty(){
    return (dispatch) => {
        axios.get(bountyUrl).then(response=>{
                dispatch ({
                    type: "LOAD-BOUNTY",
                    bounty: response.data
        })
    })
        .catch((err)=>{
            console.log(err)

    })
}}

export function addBounty(bounty){
    return(dispatch)=>{
        axios.post(bountyUrl, bounty).then((response)=>{
            dispatch ({
                type: "ADD-BOUNTY",
                bounty: response.data
            })
        })
    }}

export function deleteBounty(id){
    return (dispatch)=>{
        axios.delete(bountyUrl + id).then(response=>{
            dispatch({
                type: "DELETE_BOUNTY",
                id
            })
        })
            .catch((err)=>{
                console.log(err)
            })
        }}

export function editBounty(id, editedBounty){
    return(dispatch)=>{
        axios.put(bountyUrl + id, editedBounty).then(response => {
            dispatch({
                type: "EDIT-BOUNTY",
                editBounty: response.data,
                id
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}
