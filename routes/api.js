var express = require('express');
var router = express.Router();
var Parse = require('node-parse-api').Parse;

var options = {
    app_id:'TmXH0xxoHsRNoVsaYhVONXGfyffG1LWEXy0EyniB',
    api_key:'YlQbv40FriozqtnF4GVpb8Ul9yhyp8NHeTayav3L'
}

var nicolas = new Parse(options);

router.get('/', function(req, res, next) {
  res.send("Api page");

  nicolas.find('Scores', {objectId: 'iWipDxM7NS'}, function (err, response) {
    var current = response.score

    nicolas.update('Scores', 'iWipDxM7NS', {score: current + 10}, function (err, response) {
      console.log(response);
   });

 });
  
});

module.exports = router;
