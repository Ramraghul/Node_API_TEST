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

// Middleware
app.use(express.json())
app.use(cors({
    origin:"http://localhost:3000"
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
app.post("/post",function(req,res){
    req.body.id = users.length + 1
    users.push(req.body)
    res.json({Message:"Sir you have a post"})
})

//GET method Qurypara
app.get("/users",function(req,res){
    // let qparms = req.query
    // console.log(qparms);
    let  resUser=[];
    for (let index = parseInt(req.query.offset); index < parseInt(req.query.offset) + parseInt(req.query.limit); index++) {
       if(users[index]){
        resUser.push(users[index])
       } ;
        
    }
    res.json(resUser)
})

//GET all users
app.get("/users/all",function(req,res){
    res.json(users)
})


//VIEW method
app.get("/users/:id",function(req,res){
    let userid = req.params.id;
    let use = users.find((item)=> item.id == userid)  //{} Return key is must
    if(use){
        res.json(use)
    }else{
        res.json({Alert:"unakku oru thadava sonna puriyatha"})
    }
})

//EDIT method
app.put("/users/:id",function(req,res){
    let userid = req.params.id;
    let change = users.findIndex((item)=> item.id == userid);

    if(change != -1){
        Object.keys(req.body).forEach((item)=>{
            users[change][item]= req.body[item]
        })
        res.json({EDITH:"Edit don sir"})

    } else{
        res.json({Error:"User illa da lusu"})
    }

    //DELETE method
    app.delete("/users/:id",function(req,res){
        let userid = req.params.id;
    let delet = users.findIndex((item)=> item.id == userid);

    if(delet != -1){
        users.splice(delet,1);
        res.json({Message:"Katham margaya"})
    }else{
        res.json({Error:"Somthing wrong"})
    }
    })

})

app.listen(3001)
