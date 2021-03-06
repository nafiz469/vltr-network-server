const express = require('express')
const app = express()
const PORT = 5000
const bodyParser = require('body-parser')
const cors = require('cors')
const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectId


app.use(cors())
app.use(bodyParser.json())
require('dotenv').config()


const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mx72a.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true})
client.connect(err => {
  const taskCollection = client.db(process.env.DB_NAME).collection("volunteer-tasks")
  const userCollection = client.db(process.env.DB_NAME).collection("user-tasks")

  


})


app.get('/',(req,res)=>res.send("Welcome Developer Nazmul"))

app.listen(process.env.PORT || PORT)


