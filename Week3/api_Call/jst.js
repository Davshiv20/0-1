const express=require("express");
const jwt=require("jsonwebtoken");
const jwtPassword="123456";

//mongo db connection using mongoose
const mongoose=require("mongoose");

mongoose.connect("mongodb+srv://shivamdave2903:Oed3kl5t7gxOQyUE@cluster0.qsxo3gu.mongodb.net/user_app");

const app=express();
app.use(express.json());
const User=mongoose.model('Users',{name: String, email: String, password: String});
app.post("/signup",  async function(req,res){
    const username=req.body.username;
    const password=req.body.password;
    const name=req.body.name;

    const existingUser=await User.findOne({email:username});
    if(existingUser)
    {
        return res.status(403).send("User Already Exists");
    }
    const user=new User({
    name:"Shivam",
    email:"sd1234@gmail.com",
    password:"123455",
})

user.save();
res.json({
    "msg":"User created succesfully"
})
})


const ALL_USERS=[
    {
        username:"shivamdave2903@gmail.com",
        password:"123",
        name:"Shivam Dave",
    },
    {
        username:"sd@gmail.com",
        password:"456",
        name:"batman",
    },
    {
        username:"lm10@gmail.com",
        password:"wc22",
        name:"Lionel Messi",
    }

];
function userExists(username, password){
    let userExists=false;
    for(let i=0;i<ALL_USERS.length;i++)
    {
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password)
        {
            userExists=true;
        }
    }
    return userExists;
    //write logic to return true or false if exists or not
}

app.post("/signin", function(req,res){
    console.log("Received POST request to /signin");

    const username=req.body.username;
    const password=req.body.password;
    
    console.log("Received credentials:", username, password);

    if(!userExists(username,password)){
        return res.status(403).json({
            msg:"User doesn't exxist in our memeory db"
        });

    }
    var token=jwt.sign({username:username},jwtPassword);
    return res.json({
        token,
    })
})
app.get("/users",function(req,res){
    const token=req.headers.authorization;
    try{
        const decoded=jwt.verify(token,jwtPassword);
        const username=decoded.username;
    } catch(err){
        return res.status(403).json({
           msg:"invalid token",  
        })
    }
    res.json({
        users:ALL_USERS
    })
});

app.listen(3000);