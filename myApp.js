let express = require('express');
let app = express();

// return html to root path
app.get('/', (req, res) => {

    res.sendFile(__dirname + '/views/index.html')
})

// mount the public folder
app.use("/public", express.static(__dirname + '/public'));


app.get('/authentication', (req, res) => {

    res.json({ 
        "status": 200,
        "message": "success",
        "data": {"authenticated": true, "user": "admin", "roles": ["admin", "user"]} 
    })

})




































module.exports = app;
