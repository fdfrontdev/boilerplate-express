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
        "status": true,
        "details": {}
    })

})


app.get('/database_status', (req, res) => {

    const status = undefined
    const details = undefined

    const params = {
        host: 'localhost',
        port: 5432,
        database: '',
        user: 'admin',
        password: 'admin12345',
    }

    const { Client } = require('pg');
    const client = new Client(params);

    client.connect().then(() => {
        console.log("connected to PostgreSQL");
        status = true
    }).catch(err => {
        console.log(err);
        status = false
    });

    res.json({
        "status": status,
        "params" : params,
        "details": {}
    })

})



































module.exports = app;
