const axios =  require('axios');
const express =  require('express');
var bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const helpers = require('./helpers');
var http = require('http');
var formidable = require('formidable');
var fs = require('fs');
var cors = require('cors');


var url = require('url');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.use(express.static(__dirname + '/public'));



app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)


function logErrors (err, req, res, next) {
    console.error(err.stack)
    next(err)
}
function clientErrorHandler (err, req, res, next) {
    if (req.xhr) {
        res.status(500).send({ error: 'Something failed!' })
    } else {
        next(err)
    }
}

function errorHandler (err, req, res, next) {
    res.status(500)
    res.render('error', { error: err })
}

const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, 'uploads/');
    },

    // By default, multer removes file extensions so let's add them back
    filename: function(req, file, cb) {
        console.log('File '+file.originalname);

        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});


app.post('/fileupload/:scode/:studentId/:docref', (req, res) => {

    console.log('fileupload  pic' );
 
   // console.log(req);
    //var q = url.parse(req.url, true).query;

    //console.log('Qs ='+req.url);
    var params = req.params;


    console.log('school: '+params.scode);
    console.log('student: '+params.studentId); 
    console.log('docref: '+params.docref);

    var fpath = null;


    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) { 

     //console.log(files);

      var oldpath = files.filetoupload.path;

      var genFileName = params.studentId+'-'+params.docref+'.'+getExtension(files.filetoupload.name);

        //var dir = './images/documents/'+params.scode+'/';
       var dir = '/Users/johnperion/WorkFiles/z21/sara/ui/school_ui/school-ui-rex/src/assets/images/'+params.scode+'/';

      if (!fs.existsSync(dir)){
           fs.mkdirSync(dir);
      }
    
      var newpath = dir+ genFileName;
      fpath = genFileName;
  
      console.log(newpath);
      //var newpath = dir + files.filetoupload.name; 
 
   
     //var newpath = '/Users/johnperion/Desktop/test_tmp/' + params.scode+"/"+params.studentId+"/"+params.docref+"/tes.jpeg";
      fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
 
        res.write(fpath);
        res.end();
      });    

    }); 

}); 


// you can send full url here
function getExtension(filename) {
    return filename.split('.').pop();
}

app.get('/redirect_get/:scode/:studentid', (req, res) => {
    (async () =>  {

        
        var q =   req.params; //url.parse(req.url, true).query; 

        console.log(q.scode);
        console.log(q.studentid);


        /*
        const breeds = await axios({
            url :  'http://192.168.100.225:8080/cybermetrix/authenticate?user_name=jperion&pwd=asdf5'
         });

         if(breeds.data){
            res.send( breeds.data);
            res.end();
         }
         */
        res.send( q);
        res.end();
    })()
})



app.get('/api/:func', (req, res) => {
    (async () =>  {

        var func = req.params.func;
        var q = req.query;

        console.log("functionName "+func);
        console.log("req "+req.url);
        console.log(q);


        var wshost = 'https://immense-anchorage-42013.herokuapp.com'; 
        var wsurl = '';

        if(func === 'help'){
            wsurl = '/admin/schools/help';
        }else if(func === 'getSchoolConfig'){
            wsurl = '/admin/schools/getSchoolConfig';
        }

        console.log("connect tp "+wshost+wsurl);

        
        const wsreq = await axios({
             url :  wshost+wsurl
             
         }  )  ;

         if(wsreq.data){
            res.send( wsreq.data);
            res.end();
         }
         
    })()
})



app.get('/test', (req, res) => {
    (async () =>  {

        
        const breeds = await axios({
            url :  'http://192.168.100.225:8080/cybermetrix/authenticate?user_name=jperion&pwd=asdf5'
         }  )  ;

         if(breeds.data){
            res.send( breeds.data);
            res.end();
         }
    })()
})


app.post('/post_api/:func', (req, res) => {


    console.log('Calling node js post request. ');
   // var wshost = 'https://immense-anchorage-42013.herokuapp.com'; 
   var wshost = 'http://localhost:8080/school_reg';
    (async () =>  {

        var func = req.params.func;

        if(func === 'enroll'){

            const breeds = await axios({
                //https://immense-anchorage-42013.herokuapp.com/admin/schools/
                //url :  'http://localhost:8080/schoolreg/enrollment/student/enroll',
                url: wshost+'/enrollment/student/enroll',
                method: 'post',
                data : req.body
            });
    
            if(breeds.data){
                res.send( breeds.data);
                res.end();
            }
        } 

        if(func === 'saveAttachment'){

            const docs = await axios({

                url: 'http://localhost:8080/school_reg/enrollment/student/saveAttachmentDetails',
                method: 'post',
                data : req.body
            });
            if(docs){
                res.send( docs);
                res.end();
            }
        }

        if(func === 'updateEnrollmentStatus'){
            console.log('Update Status =');
            console.log(req.body);
            const docs = await axios({


                url: 'http://localhost:8080/school_reg/enrollment/student/updateStatus',
                method: 'post',
                data : req.body
            });
            if(docs){
                res.send( docs);
                res.end(); 
            }
        }
    })()

})

app.post('/login', (req, res) => {
    (async () =>  {

        const breeds = await axios({
            url :  'http://localhost:8080/school_reg/authentication/user/login',
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