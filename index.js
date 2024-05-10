const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose")


require("dotenv").config()
const products = require("./products");
const app = express();
const uri = process.env.CONNECTION_STRING


async function connect(){

    try{

        await mongoose.connect(uri);
        console.log("MongoDB connection established");
    } catch (error){
        console.error(error);
    }
}

connect();



app.use(express.json());
app.use(cors());

app.get("/", (req,res) =>{

    res.send("Welcome to our online shop api");

});

app.get("/products", (req,res) =>{

    res.send(products);

});

const port = process.env.PORT || 5000;

app.listen(port, console.log(`Server running on port ${port}`));










