
//reading file .. it's an async function
const fs=require("fs");
fs.readFile('a.txt',(err,data)=>{
    if(err) throw err;

    console.log(data.toString());
});

console.log("Hi bitch");