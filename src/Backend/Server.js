const express =  require("express");
const collection = require("./mongodb")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors()) 

app.get("/Login",cors(),(req,res)=> {

})

app.post("/Login",async(req,res)=>{
    const{email,password}=req.body
    try{
        const  check = await  collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
        }

    }
    catch(e){
        res.json("fail")

    }
})



app.post("/Signin",async(req,res)=>{
    const{email,password,name , confirmPassword}=req.body
    const data = {
        email:email,
        password:password,
        name : name,
        confirmPassword: confirmPassword
    }
    try{
        const  check = await  collection.findOne({email:email})
        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")

    }
})
app.listen(3405,() =>{
    console.log("Port Conneted")
})