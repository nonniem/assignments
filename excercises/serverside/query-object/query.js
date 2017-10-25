function filterDatabase(query, datebase){
  return database.filter((doc)=>{
    for(let key in query){
        if(doc[key] !== query[key]){
          return false;
        }
    }
    return true;
  })
}

let database = [
  {completed: true, a: 1},
  {completed: true, a: 0},
  {completed: false, a: 1},
  {completed: true, a: 0},
  {completed: false, a: 1}
]

let query = {completed: true}



console.log(filterDatabase(query, database));

filterDatabase()
