require('coffee-script');
var express = require('express');

// look at https://github.com/kuno/GeoIP
// var geoip = require('geoip-lite');
// var ip = "207.97.227.239";
// var geo = geoip.lookup(ip);
// console.log(geo);

var redis = require('redis');
var db = redis.createClient();

var app = express();

app.configure('development', function () {
  app.set('port', 3000);
  app.use(express.errorHandler({
    dumpExceptions: true,
    showStack: true
  }));
});

app.configure('test', function () {
  app.set('port', 3001);
});

app.get('/', function(req, res){
  res.send('coming soon');
});

server = app.listen(app.settings.port);
console.log("Express server listening on port %d in %s mode", app.settings.port, app.settings.env);
