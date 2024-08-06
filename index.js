const express = require("express")
const mongoose = require("mongoose")
const Item = require("./models/items.model")
const itemRoute = require("./routes/item.route")
const app = express();

const PORT = 5550

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended : false}))

// routes
app.use("/api/items", itemRoute)


mongoose.connect("mongodb://localhost:27017/Product_db")
.then(()=>{
    console.log("Database is connected successfully")
    app.listen(PORT, ()=>{console.log(`Server is running on port ${PORT}`)})
    }
);


