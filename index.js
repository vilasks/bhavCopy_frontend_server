const express = require("express")
const app = express()
const cors = require("cors")
require("dotenv").config()
app.use(cors())

app.use("/",express.static("./dist/frontend"))

app.listen(process.env.PORT,(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("Started listening on port " + process.env.PORT)
    }
})