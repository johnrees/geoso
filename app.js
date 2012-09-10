var express = require('express');

// look at https://github.com/kuno/GeoIP
// var geoip = require('geoip-lite');
// var ip = "207.97.227.239";
// var geo = geoip.lookup(ip);
// console.log(geo);

var redis = require('redis');
var db = redis.createClient();

var app = express();

// app.use(function(req, res, next){
//   var ua = req.headers['user-agent'];
// });

app.get('/', function(req, res){
  db.set('online', 'aa');
  var a = db.get('online');
  res.send(a);
});

app.listen(3000);
console.log('Listening on port 3000');
