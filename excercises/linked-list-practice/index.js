let linkedList = {
  next:{
    next: {
      next:null,
      value: "samantha"
    },
    value: "jerry"
  },
  value: "enrique"
}

function genLinkedList(n){
    if(n === 0) return{
      next: null,
      value: 0
    }
    return{
      next: genLinkedList(n - 1),
      value: n
    }
}

console.log(genLinkedList(3))
