// //All required
// const express = require("express")
// const Room = express()

// //Middleware
// Room.use(express.json())

// //NODE DATA Save point
// Customer = []



// // Create All Rooms (POST METHOD)
// Room.post("/Rooms", function (req, res) {
//     req.body.id = Customer.length + 1;
//     Customer.push(req.body);

//     //POST Message
//     res.json({ Message: "Room created Done Boss" });
// })



// //GET ALL Rooms with Customers (GET METHOD)
// Room.get("/Rooms/All", function (req, res) {

//     //Quarry Params
//     // let filter = req.query
//     // console.log(filter);
//     //Limit 
//     let fine = [];
//     for (let index = parseInt(req.query.offset); index < parseInt(req.query.offset) + parseInt(req.query.limit); index++) {
//         fine.push(Customer[index]);
//     }
//     //GET Message
//     res.json(fine)
// })



// // View Particular Room (GET METHOD)
// Room.get("/Rooms/:id", function (req, res) {
    
//     //ID Find
//     let RoomID = req.params.id;
//     let RoomData = Customer.find((data) => data.id == RoomID);

//     if (RoomData) {
//         res.json(RoomData)
//     } else {
//         res.json({ Alert: "User Not Founded" })
//     }
// })


// //ROOM Booking in Customer (PUT METHOD)
// Room.put("/Rooms/:id", function (req, res) {

//     //ID Find
//     let RoomID = req.params.id;
//     let RoomData = Customer.findIndex((data) => data.id == RoomID);

//     if (RoomData != -1) {
//         Object.keys(req.body).forEach((item) => {
//             Customer[RoomData][item] = req.body[item]
//         })
//         res.json({ EDITH: "Edit done Boss" })
//     } else {
//         res.json({ Message: "Something Went Wrong" })
//     }
// })


// //If you need uses (DELETE method) 
// Room.delete("/Rooms/:id", function (req, res) {

//     //ID Find
//     let RoomID = req.params.id;
//     let RoomData = Customer.findIndex((data) => data.id == RoomID);

//     if (RoomData != -1) {

//         Customer.splice(RoomData, 1);
//         res.json({ Message: "Room Closed For COVID Reason" })
//     } else {
//         res.json({ Error: "Something Went wrong" })
//     }
// })


// Room.listen(4001)
