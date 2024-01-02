let express = require('express');
let app = express();

app.get('/', (req,res) =>{

    res.sendFile(__dirname + '/views/index.html')
})

express.static(__dirname + '/public',app.use());




































 module.exports = app;
