// const fs = require("fs")

// fs.mkdir("Test",function(err){
//     if(err) throw err
//     fs.writeFile("./Test/Test.txt","Jhony Test","utf-8",function(err){
//         if(err) throw err
//         console.log("Test done");
//     })
// })

const express = require("express")
const app = express()
const cors = require("cors")
const mongoDB = require("mongodb")
const MongoClient = mongoDB.MongoClient
const dotenv = require("dotenv")
const URL = process.env.DB
const DB = "API"

// Middleware
app.use(express.json())
app.use(cors({
    origin:"https://rococo-cat-1dc06c.netlify.app"
}))

let users=[];

// app.get("/home",function(req,res){
//     res.json([
//         {
//             Name:"Raghul",
//             future:"Fly alone"
//         },
//         {
//             Name:"Musk",
//             future:"Role model"
//         },
//         {
//             Name:"Buffet",
//             future:"Role model"
//         },
//     ]);
// })


// POST method
app.post("/post",async function(req,res){
    // req.body.id = users.length + 1
    // users.push(req.body)
    // res.json({Message:"Sir you have a post"})

    try {
        //1.Create a connection nodejs to mongoDB
    const connection =await MongoClient.connect(URL)

    //2.Select DB
    const db = connection.db(DB)

    //3.Select Collection
    //4.C.R.E.D Function
    await db.collection("users").insertOne(req.body)

    //5.Close connection
    await connection.close()

    res.json({Message:"Done"})
    } catch (error) {
        res.status(500).json({Message:"something went wrong"})
    }
})

//GET method Qurypara
app.get("/users", async function(req,res){
    // let qparms = req.query
    // console.log(qparms);
    // let  resUser=[];
    // for (let index = parseInt(req.query.offset); index < parseInt(req.query.offset) + parseInt(req.query.limit); index++) {
    //    if(users[index]){
    //     resUser.push(users[index])
    //    } ;
    // }
    try {
        //1.Create a connection nodejs to mongoDB
    const connection =await MongoClient.connect(URL)

     //2.Select DB
     const db = connection.db(DB)

     //3.Select Collection
    //4.C.R.E.D Function
    const resUser = await db.collection("users").find().toArray()

    //5.Close connection
    await connection.close()

    res.json(resUser)
    } catch (error) {
        res.status(500).json({Message:"something went wrong"})
    }
    
})

//GET all users
app.get("/users/all",function(req,res){
    res.json(users)
})


//VIEW method
app.get("/users/:id",async function(req,res){
    // let userid = req.params.id;
    // let use = users.find((item)=> item.id == userid)  //{} Return key is must
    // if(use){
    //     res.json(use)
    // }else{
    //     res.json({Alert:"unakku oru thadava sonna puriyatha"})
    // }
    try {
        //1.Create a connection nodejs to mongoDB
    const connection =await MongoClient.connect(URL)

     //2.Select DB
     const db = connection.db(DB)

     //3.Select Collection
    //4.C.R.E.D Function
    const parti = await db.collection("users").findOne({_id:mongoDB.ObjectId(req.params.id)})

    //5.Close connection
    await connection.close()

    res.json(parti)
    } catch (error) {
        res.status(500).json({Message:"something went wrong"})
    }
})

//EDIT method
app.put("/users/:id",async function(req,res){
    // let userid = req.params.id;
    // let change = users.findIndex((item)=> item.id == userid);

    // if(change != -1){
    //     Object.keys(req.body).forEach((item)=>{
    //         users[change][item]= req.body[item]
    //     })
    //     res.json({EDITH:"Edit don sir"})

    // } else{
    //     res.json({Error:"User illa da lusu"})
    // }
    try {
        //1.Create a connection nodejs to mongoDB
    const connection =await MongoClient.connect(URL)

     //2.Select DB
     const db = connection.db(DB)

     //3.Select Collection
    //4.C.R.E.D Function
    const parti = await db.collection("users").findOneAndUpdate({_id:mongoDB.ObjectId(req.params.id)},{$set:req.body})

    //5.Close connection
    await connection.close()

    res.json(parti)
    } catch (error) {
        res.status(500).json({Message:"something went wrong"})
    }

})

  //DELETE method
  app.delete("/users/:id",async function(req,res){
//     let userid = req.params.id;
// let delet = users.findIndex((item)=> item.id == userid);

// if(delet != -1){
//     users.splice(delet,1);
//     res.json({Message:"Katham margaya"})
// }else{
//     res.json({Error:"Somthing wrong"})
// }
try {
    //1.Create a connection nodejs to mongoDB
const connection =await MongoClient.connect(URL)

 //2.Select DB
 const db = connection.db(DB)

 //3.Select Collection
//4.C.R.E.D Function
await db.collection("users").findOneAndDelete({_id:mongoDB.ObjectId(req.params.id)})

//5.Close connection
await connection.close()

res.json({message:"Delete data"})
} catch (error) {
    res.status(500).json({Message:"something went wrong"})
}
})


app.listen(process.env.PORT || 3001)
