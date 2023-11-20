// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import Connection from './database/db.js';
// import Routes from './routes/route.js';


const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require('body-parser');
const Connection = require('./database/db.js');
const Route = require('./routes/route.js');



app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', Routes);

const PORT = 5000;

Connection();

app.listen(PORT, () => console.log(`Your server is running successfully on PORT ${PORT}`));

// const express = require("express");
// const app = express();
// const port = process.env.PORT || 5000;
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const { ObjectId } = require("mongodb");
// const cors = require("cors");
// require("dotenv").config();

// // middleware
// app.use(cors());
// app.use(express.json());


// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.rms22hp.mongodb.net/?retryWrites=true&w=majority`;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();

//     const todoCollection = client.db("TodoApp").collection("todos");



//         // //  todo related api.....................................................................

//     app.post("/todos", async (req, res) => {
//       const data = req.body;
//     // //   const query = { email: user.email };
//     // //   const existingUser = await userCollection.findOne(query);
//     // //   if (existingUser) {
//     // //     return res.send({ message: "user already exists" });
//     // //   }
//       const result = await todoCollection.insertOne(user);
//       res.send(result);
//     });




//     // app.get("/users", async (req, res) => {
//     // // app.get("/users",  async (req, res) => {
//     //   const result = await userCollection.find().toArray();
//     //   console.log(result);
//     //   res.send(result);
//     // });

//     // app.post("/users", async (req, res) => {
//     //   const user = req.body;
//     //   const query = { email: user.email };
//     //   const existingUser = await userCollection.findOne(query);
//     //   if (existingUser) {
//     //     return res.send({ message: "user already exists" });
//     //   }
//     //   const result = await userCollection.insertOne(user);
//     //   res.send(result);
//     // });
// //     app.patch("/users/admin/:id", async (req, res) => {
// //       const id = req.params.id;
// //       console.log(id);
// //       const filter = { _id: new ObjectId(id) };
// //       const updateDoc = {
// //         $set: {
// //           role: "admin",
// //         },
// //       };
// //       const result = await userCollection.updateOne(filter, updateDoc);
// //       console.log(result);
// //       res.send(result);
// //     });

   




//     // .............................................................................
//     // Send a ping to confirm a successful connection...............................
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//   }
// }
// run().catch(console.dir);

// // check check check
// app.get("/", (req, res) => {
//   res.send("TODO app server is running.");
// });
// app.listen(port, () => {
//   console.log(`TODO app server is runnung on port: ${port}`);
// });