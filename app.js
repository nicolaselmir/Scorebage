var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var Parse = require('node-parse-api').Parse;

var serialport = require("serialport");
var SerialPort = serialport.SerialPort;

var app = express();
serialPort = new SerialPort("/dev/tty.usbmodem1421", {
            baudrate: 9600,
            parser: serialport.parsers.readline("\n")
        });

    serialPort.on('open', function () {
        console.log('open');
        serialPort.on('data', function (data) {
         console.log(data)


           nicolas.find('Scores', {objectId: 'iWipDxM7NS'}, function (err, response) {
           var current = response.score


    nicolas.update('Scores', 'iWipDxM7NS', {score: current + 10}, function (err, response) {
      
});
 });
  });
    });


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


var options = {
    app_id:'TmXH0xxoHsRNoVsaYhVONXGfyffG1LWEXy0EyniB',
    api_key:'YlQbv40FriozqtnF4GVpb8Ul9yhyp8NHeTayav3L'
}

var nicolas = new Parse(options);


//Routes

app.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


//update the app 
app.get('/api', function(req, res) {
  res.send("Api page");

  nicolas.find('Scores', {objectId: 'iWipDxM7NS'}, function (err, response) {
    var current = response.score


    nicolas.update('Scores', 'iWipDxM7NS', {score: current + 5}, function (err, response) {
      console.log(response);
   });

    console.log(response.score);

 });
});


//get the score 
app.get('/get', function(req, res) {
  res.send("Api page");
    nicolas.find('Scores', {objectId: 'iWipDxM7NS'}, function (err, response) {  
    	console.log(response.score);
 });
});



app.listen(3000);

module.exports = app;