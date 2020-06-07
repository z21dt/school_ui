const express = require('express');
const bodyParser = require('body-parser');

var Client = require('node-rest-client').Client;
 
var client = new Client();

const app = express();

app.use(bodyParser.json());

app.get('/', function(req, res, next){
    

    client.get("http://192.168.100.225:8080/cybermetrix/authenticate?user_name=jperion&pwd=asdf5", function (data, response) {
    // parsed response body as js object
        console.log(data);
    // raw response
        console.log(response);
    });

    res.send('Hello World...');
} );

app.post("/", function(req, res, next){
    res.send('Hello World...');
} );

app.listen(3000, function(){
    console.log('Server Started');
} );