require('dotenv').config({path: "./.env"})

let express = require('express');
let app = express();

// return html to root path
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/views/index.html')
})

// mount the public folder
app.use("/public",express.static( __dirname + '/public'));

app.get('/json',(req,res)=>{
    console.log(process.env.MESSAGE_STYLE)
    console.log(typeof process.env.MESSAGE_STYLE)
    if(process.env.MESSAGE_STYLE === "uppercase"){
        res.json({"message":"HELLO JSON"})
    }
    else{
        res.json({"message":"Hello json"})
    }

    
})




































module.exports = app;
