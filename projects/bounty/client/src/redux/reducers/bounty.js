let defaultBounty = [];
    export function bounty(prevBounty = defaultBounty, action){
        let newBounty = [...prevBounty];
            switch (action.type) {

                case "ADD-BOUNTY":
                    newBounty.push(action.bounty);
                        return newBounty;

                case "DELETE_BOUNTY":
                    return newBounty.filter((bounty)=>{
                        return action.id !== bounty._id
                    });

                case "LOAD-BOUNTY":
                    return action.bounty;

                case "EDIT-BOUNTY":
                    return newBounty.map((bounty) => {
                        if(action.id === bounty._id){
                            return action.editBounty
                        } else {
                            return bounty;
                        }
                    })

                    default:
                        return prevBounty;
            }
    }
