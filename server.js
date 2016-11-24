//main setup
var express = require('express');   //define express
var app = express();                //define app with express
var path = require('path');         //define path
var os = require('os');             //define os

//get ip addresses
  var interfaces = os.networkInterfaces();
  var addresses = [];
  for (var k in interfaces) {
      for (var k2 in interfaces[k]) {
          var address = interfaces[k][k2];
          if (address.family === 'IPv4' && !address.internal) {
              addresses.push(address.address);
          }
      }
  }

// set the view engine to ejs
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );

//setup view to index page
app.get('/', function (req, res) {
 var hostname = os.hostname();
 var ostype = os.type();
 var osplatfrom = os.platform();
 var processpid = process.pid;
 var ipaddresses = addresses;
 var sitename = process.env.WEBSITE_HOSTNAME;
 var region = process.env.REGION_NAME;
 var websku = process.env.WEBSITE_SKU;
 var scmtype = process.env.ScmType;
 var slotname = process.env.slotname || 'none';

  res.render('index', { //ejs always looks in the /views folder
    hostname: hostname,
    ostype: ostype, 
    osplatfrom: osplatfrom,
    processpid: processpid,
    ipaddresses: ipaddresses,
    sitename: sitename,
    region: region,
    websku: websku,
    scmtype: scmtype,
    slotname: slotname
    });
  });

//set environment variables for azure
app.set('port', process.env.PORT || 8080);

//http setup
var server = app.listen(app.get('port'), function () {  //http server listen
  var host = server.address().address;
  var port = server.address().port;

//ouput to console
console.log('Example app listening at http://%s:%s', host, port);
console.log('hostname = ' + os.hostname());
console.log('os type = ' + os.type());
console.log('os platfrom = ' + os.platform());
console.log('ip addres = ' + addresses);
console.log('process pid = ' + process.pid);
});

//export modules for testing
module.exports = addresses;
