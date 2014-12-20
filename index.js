var codes = require("rescode");
var http = require('http');

var express = require('express');
var app = express();

app.get('/', function(req, res) {
  // Sequence is important
  codes.loadModules(["ean2", "ean5", "ean8", "ean13"]);

  var data8 = codes.create("ean8","33235656");

  res.set("Content-Type","image/png");
  res.send( data8 );
});

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  console.log('Example app listening at http://%s:%s', host, port)

});