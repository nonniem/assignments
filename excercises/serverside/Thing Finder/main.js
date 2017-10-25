const express = require("express");
const app = express();
const bodyParser = require("body-parser");

// let query = {color: "red"}

let database = [
  {fruit: "banana", color: "yellow"},
  {fruit: "apple", color: "red"},
  {fruit: "watermelon", color: "red"},
  {fruit: "grapes", color: "purple"},
  {fruit: "cucumber", color: "green"}
]

function filterDatabase(query, database){
    return database.filter((doc) => {
        for(let key in query){
            if(doc[key] !== query[key]){
              return false;
            }}
        return true;
    })}

app.use(bodyParser.json());

app.get("/fruits", (req, res) => {
    console.log(req.query);
    res.send(database);
})

app.listen(2222, () =>  {
    console.log('spaGhetti')
})
