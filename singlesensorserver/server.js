var MS = require("mongoskin");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = 1234;
var VALUEw = 0;
var VALUEqx = 0;
var VALUEqy = 0;
var VALUEqz = 0;
var VALUEe1 = 0;
var VALUEe2 = 0;
var VALUEe3 = 0;
var VALUEy = 0;
var VALUEp = 0;
var VALUEr = 0;
var VALUEgrx = 0;
var VALUEgry = 0;
var VALUEgrz = 0;
var VALUEax = 0;
var VALUEay = 0;
var VALUEaz = 0;
var VALUEawx = 0;
var VALUEawy = 0;
var VALUEawz = 0;
var VALUEarx = 0;
var VALUEary = 0;
var VALUEarz = 0;
// var VALUEw2 = 0;
// var VALUEqx2 = 0;
// var VALUEqy2 = 0;
// var VALUEqz2 = 0;
// var VALUEe12 = 0;
// var VALUEe22 = 0;
// var VALUEe32 = 0;
// var VALUEy2 = 0;
// var VALUEp2 = 0;
// var VALUEr2 = 0;
// var VALUEgrx2 = 0;
// var VALUEgry2 = 0;
// var VALUEgrz2 = 0;
// var VALUEax2 = 0;
// var VALUEay2 = 0;
// var VALUEaz2 = 0;
// var VALUEawx2 = 0;
// var VALUEawy2 = 0;
// var VALUEawz2 = 0;
// var VALUEarx2 = 0;
// var VALUEary2 = 0;
// var VALUEarz2 = 0;
 var VALUEtime = 0;


var db = MS.db("mongodb://localhost:27017/BacStorage")
app.get("/", function (req, res) {
    res.redirect("/index.html");
});

app.get("/getLatest", function (req, res) {
  db.collection("data").find({}).sort({time:-1}).limit(10).toArray(function(err, result){
    res.send(JSON.stringify(result));
  });
});

app.get("/getData", function (req, res) {
  var from = parseInt(req.query.from);
  var to = parseInt(req.query.to);
  db.collection("data").find({time:{$gt:from, $lt:to}}).sort({time:-1}).toArray(function(err, result){
    res.send(JSON.stringify(result));
  });
});


app.get("/getValue", function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.send(VALUEw.toString() + " " + VALUEqx + " " + VALUEqy + " " + VALUEqz +" " + VALUEe1 + " " + VALUEe2 + " " + VALUEe3 + " " + Valuey +
           " " + VALUEp + " " + VALUEr + " " + VALUEgrx +" " + VALUEgry + " " + VALUEgrz + " " + VALUEax + " " + Valueay + " " + Valueaz +
            " " + VALUEawz + " " + VALUEawy + " " + VALUEawz +" " + VALUEarx + " " + VALUEary + " " + VALUEarz + " " +
            // Valuew2 + " " + Valueqx2 +
          //  " " + VALUEqy2 + " " + VALUEqz2 + " " + VALUEe12 +" " + VALUEe22 + " " + VALUEe32 + " " + VALUEy2 + " " + Valuep2 + " " + Valuer2 +
          //  " " + VALUEgrx2 + " " + VALUEgry2 + " " + VALUEgrz2 +" " + VALUEax2 + " " + VALUEay2 + " " + VALUEaz2 + " " + Valueawx2 + " " + Valueawy2 +
        //    " " + VALUEawz2 + " " + VALUEarx2 + " " + VALUEary2 +" " + VALUEarz2 + " " +
        //VALUEtime + " " +
        "\r");
});

app.get("/sendData", function (req, res) {
  VALUEw = parseFloat(req.query.w);
  VALUEqx = parseFloat(req.query.qx);
  VALUEqy = parseFloat(req.query.qy);
  VALUEqz = parseFloat(req.query.qz);
  VALUEe1 = parseFloat(req.query.e1);
  VALUEe2 = parseFloat(req.query.e2);
  VALUEe3 = parseFloat(req.query.e3);
  VALUEy = parseFloat(req.query.y);
  VALUEp = parseFloat(req.query.p);
  VALUEr = parseFloat(req.query.r);
  VALUEgrx = parseFloat(req.query.grx);
  VALUEgry = parseFloat(req.query.gry);
  VALUEgrz = parseFloat(req.query.grz);
  VALUEax = parseFloat(req.query.ax);
  VALUEay = parseFloat(req.query.ay);
  VALUEaz = parseFloat(req.query.az);
  VALUEawx = parseFloat(req.query.awx);
  VALUEawy = parseFloat(req.query.awy);
  VALUEawz = parseFloat(req.query.awz);
  VALUEarx = parseFloat(req.query.arx);
  VALUEary = parseFloat(req.query.ary);
  VALUEarz = parseFloat(req.query.arz);
  // VALUEw2 = parseFloat(req.query.w2);
  // VALUEqx2 = parseFloat(req.query.qx2);
  // VALUEqy2 = parseFloat(req.query.qy2);
  // VALUEqz2 = parseFloat(req.query.qz2);
  // VALUEe12 = parseFloat(req.query.e12);
  // VALUEe22 = parseFloat(req.query.e22);
  // VALUEe32 = parseFloat(req.query.e32);
  // VALUEy2 = parseFloat(req.query.y2);
  // VALUEp2 = parseFloat(req.query.p2);
  // VALUEr2 = parseFloat(req.query.r2);
  // VALUEgrx2 = parseFloat(req.query.grx2);
  // VALUEgry2 = parseFloat(req.query.gry2);
  // VALUEgrz2 = parseFloat(req.query.grz2);
  // VALUEax2 = parseFloat(req.query.ax2);
  // VALUEay2 = parseFloat(req.query.ay2);
  // VALUEaz2 = parseFloat(req.query.az2);
  // VALUEawx2 = parseFloat(req.query.awx2);
  // VALUEawy2 = parseFloat(req.query.awy2);
  // VALUEawz2 = parseFloat(req.query.awz2);
  // VALUEarx2 = parseFloat(req.query.arx2);
  // VALUEary2 = parseFloat(req.query.ary2);
  // VALUEarz2 = parseFloat(req.query.arz2);
  Valuetime = new Date().getTime();
	var dataObj = {
    w: VALUEw,
    qx: VALUEqx,
    qy: VALUEqy,
    qz: VALUEqz,
    e1: VALUEe1,
    e2: VALUEe2,
    e3: VALUEe3,
    y: VALUEy,
    p: VALUEp,
    z: VALUEr,
    grx: VALUEgrx,
    gry: VALUEgry,
    grz: VALUEgrz,
    ax: VALUEax,
    ay: VALUEay,
    az: VALUEaz,
    awx: VALUEawx,
    awy: VALUEawy,
    awz: VALUEawz,
    arx: VALUEarx,
    ary: VALUEary,
    arz: VALUEarz,
    // w2: VALUEw2,
    // qx2: VALUEqx2,
    // qy2: VALUEqy2,
    // qz2: VALUEqz2,
    // e12: VALUEe12,
    // e22: VALUEe22,
    // e32: VALUEe32,
    // y2: VALUEy2,
    // p2: VALUEp2,
    // r2: VALUEr2,
    // grx2: VALUEgrx2,
    // gry2: VALUEgry2,
    // grz2: VALUEgrz2,
    // ax2: VALUEax2,
    // ay2: VALUEay2,
    // az2: VALUEaz2,
    // awx2: VALUEawx2,
    // awy2: VALUEawy2,
    // awz2: VALUEawz2,
    // arx2: VALUEarx2,
    // ary2: VALUEary2,
    // arz2: VALUEarz2,
		time: VALUEtime
	}
	db.collection("data").insert(dataObj, function(err,result){
		console.log("added data: " + JSON.stringify(dataObj));
	});
  res.send(VALUEtime.toString());
});


app.use(methodOverride());
app.use(bodyParser());
app.use(express.static(__dirname + '/public'));
app.use(errorHandler());

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port);
