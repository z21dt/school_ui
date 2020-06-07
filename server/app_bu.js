const axios =  require('axios');
const express =  require('express');
var bodyParser = require('body-parser');

const app = express();
//app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.get('/test', (req, res) => {
    (async () =>  {

        console.log();

        const breeds = await axios({
            url :  'http://192.168.100.225:8080/cybermetrix/authenticate?user_name=jperion&pwd=asdf5'
         });

         if(breeds.data){
            res.send( breeds.data);
            res.end();
         }
    })()
})


app.post('/login', (req, res) => {
    (async () =>  {

        const breeds = await axios({
            url :  'http://localhost:8080/schoolreg/authentication/user/login',
            method: 'post',
            data : req.body
         });

         if(breeds.data){
            res.send( breeds.data);
            res.end();
         }
    })()
})

const server = app.listen(3000, () => {
    console.log("Listening on post %s", server.address().port);
});