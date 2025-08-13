import express from "express"
const app=express()
const port=8000 //8000
const users=[{
    "id": 1237,
    "userName": "Fan"
},
{
    "id": 1237,
    "userName": "Fan"
}]
console.log("Test");

app.use(express.json())
//requests

//get all users / hello
///routes
/// /api/user   /api/hello
app.get("/api/users",(req,res)=>{
    //do some stuff
    //res.send("Hello, world")
    // res.use
    // const users=getAllUsers()
    res.json(users);
})

app.post("/api/users",(req,res)=>{
    console.log(req.body);
    users.push(req.body);
    res.json(users);
})

//Params Path
app.get("/api/user/:id/:count",(req,res)=>{
    console.log("Params:", req.params);
    //getbyid()req.params['id']
    res.json({message:"it worked"})
})

app.listen(port, ()=>{console.log(`Listening on Port: ${port}`);} )