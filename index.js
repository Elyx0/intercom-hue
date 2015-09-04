var ip = process.argv[2] || false;
var username = process.argv[3] || false;

var express = require('express');
var bodyParser = require('body-parser');

var hue = require("node-hue-api");
var HueApi = hue.HueApi;
var lightState = hue.lightState;
var timeout = 10000;

var app = express();

if (!(process.argv[2] && process.argv[3])) {
  app.get('/',function(req,res){
    hue.upnpSearch(timeout).then(function(bridge){
      console.log('[DEBUG]: You need to find your bridge username');
      res.send(bridge);
    }).done();
  });
}
else
{
  var api = new HueApi(ip, username);
  var state = lightState.create().longAlert();

  app.use(bodyParser.json());

  app.post('/',function(req,res){
    var body = req.body;
    if (body.type == "notification_event") {
      console.log('Received hook:',body.id,body.topic);
      api.groups(function(err, config) {
        if (err) throw err;
        api.setGroupLightState(1,state,function(err,group){
            //Lighting the office ! Wake up people ! Customers to deal with !
            res.sendStatus(200);
          });

      });
    }
    else {
      res.sendStatus(200);
    }
  });
  console.log('[DEBUG]:  Listening for new intercom messages')
}

app.listen(3200);
console.log('Server started.');