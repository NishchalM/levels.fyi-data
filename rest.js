var CryptoJS = require("crypto-js/core");
var aes = require("crypto-js/aes");
var mode = require('crypto-js/mode-ecb');
var pako = require('pako');
var atob = require('atob');

function encrypt (n) {
 var e = "billiondollarvaluation"
      , r = 16;     
     var a = CryptoJS.MD5(e),
         x = a.toString(CryptoJS.enc.Base64),
         y = x.substr(0, r)
       , o = aes.decrypt({
            ciphertext: CryptoJS.enc.Base64.parse(n)
      }, CryptoJS.enc.Utf8.parse(y), {
             mode: mode,
             iv: null
       }).toString(CryptoJS.enc.Base64);
      var i = atob(o).split("").map(function(e) {
              return e.charCodeAt(0)
            })
      console.log(i);            
      var s = pako.inflate(i, {
         to: "string"
      });             
      return JSON.parse(s)
 }

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {  
  var ret = encrypt(req.query.payload)
  res.send(ret);
});

app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });


 

