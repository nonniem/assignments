import axios from "axios";
let politicsUrl = "http://localhost:9111/politics";

export function loadPost(){
    return(dispatch)=>{
        axios.get(politicsUrl).then(response => {
            dispatch ({
                type: "LOAD_POST",
                politics: response.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }
}

export function addPost(post){
    return(dispatch)=>{
        axios.post(politicsUrl, post).then((response) => {
            dispatch ({
                type: "ADD_POST",
                politics: response.data
            })
        })
    }}

export function deletePost(id){
    return(dispatch)=>{
        axios.delete(politicsUrl + id).then(response=>{
            dispatch: {
                type: "DELETE_POST",
                id
            }
        })
        .catch((err)=>{
            console.log(err)
        })
    }}
