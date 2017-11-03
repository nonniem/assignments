let defaultPolitics = [];
export function politics(prevPost = defaultPolitics, action){
    let newPosts = [...prevPost];
        switch(action.type){

            case "ADD_POST":
                newPosts.push(action.politics);
                return newPosts;

            case "DELETE_POST":
                return newPosts.filter((post)=>{
                    return action.id !== post._id
                });

            case "LOAD_POST":
                return action.politics;

            case "EDIT_POST":
                return newPosts.map((post)=>{
                    if(action.id === post._id){
                        return action.editPost;
                    } else {
                        return post;
                    }
                })

                default:
                    return prevPost;
        }
}
