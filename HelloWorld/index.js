"use strict";
console.log("hello world!");
console.log("test git");
var mesaj = "ceva";
console.log(mesaj);
var sMessage = "Mesaj RESponse";
//pt json
var oResponse = {
    "return code": "1",
    "returnMessage": "Everything is ok", 
    "returnData": null
};

//inregistrare 2
//http = modul
//require module = include un modul, pachete
var http = require("http");
//variabile
var iPort = 8081;
//creaza http server
var server = http.createServer(function(req, res){
    console.log("Request recived");
    //ca sa returnez un raspuns (res)
   res.writeHead(200, {'Content-Type': 'text/plain'});
   res.write(JSON.stringify(oResponse));
   res.write("\n"+sMessage);
    res.end();
    console.log('response send');
});
//severul are un listen board, pe care il punem pe port
server.listen(iPort);
console.log("server running at http://127.0.0.1:" + iPort + "/");