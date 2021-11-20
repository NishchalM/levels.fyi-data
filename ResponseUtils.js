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
 

 var n = 'nCkBF6+JQZUg3ewIFMetba7qMmTJnPhGgencltLmwxdbdmptbEG2nzjMTvmyrJnId4ju0dA1j4Yldfo+BbbP5Y5tPwY77V1lrIOVmbmO86exR9JBJlOFb/xJlauBQyfI6bYW5bKZyXoI1WuzaZPoVuE7bGa/jcVS8IYnwTAom7dm0tUerxx9p0Mh80Eg1Q7RNyWEe9O3ejwUygfRBEAXoDz9n3qT518cVu5v2NFG/wJlYSCpboOl2y+09nGd7THBW5DQLzc3w81mw5e4HtWXzDMZC0G7a0GpgLhFa1xfArXv1jm5Vb235hmWC77ZeZiD8I2bZ/ZCzjjVgZ17ZOc+0qxVWR7mSF9eOQs2PDOC81zO9qA49zjp4mTcf7S6STX7OKW8iJw6tj6g/D8WpJ/bGSQfayCzjynH6rWKJvW9v9Pq2hpZx7+FCDzzo4eUiZazLsJfdgSTq1xET4Tayub3IB+OPt/dQCgzp18kgopVVXUabyMA5CyLH60gvzn7+Gi5aVIjRqVCBw4Fob/9b6i4elqVYQ33z/apnbjfudz7OSchqH+P+HCRCb5ebQDTk5fab3JDPZ8sdWFLRjmWBUwe5YKG2CJJeL+porrH/GpJFZI7NZHaNENcp+nWRjAeMZdJ43nuFNFcJKXHlYofPvpJhCXaXhsav8SxcPMSLSY8kYy9X2AIG/W4dGjiXle8/4Akbu8aRtezd/RpOdXQ0mhgFjpayAmt/ROo7sXrsnnFf/cZJ2ZaUtMd3HufKLtjQS6KHjJq8unYhWaL3xIuaJ1FAJ8tNyQeuKGSi2yfkVH/9rf5FkRKIjL88TPQwwxAz3O6A8zfMdMTlzifaexYnpVU3VjZ5OXG6DDhJZAiFvZ+mZvVps0TtN0VKKdZWF4eXVHa31hzqWFSwz5v7cNz+dZMshlWxs4pcvzPySbazuaf05GQB1AGSMyC34R7XinOyqN9yyiU/0c+9+dVKDQNF5rmVu4ZifWBfMDpwLUETbD6vPV0vLgiOGjcJsipWAa45Yr6HQkkFwba/rh/Kj+Q29Itt6rl4exvucj97LEmITspAYXW6ef2UR9LfA2CcYglz/VAdnI8VGC3IQxAFbnEwg1B0xdzhW3hNbNyj5Ptvk06fQvcDo1uOqAF4ZJwPO8M+C5Ll6CjzsHOflGIaT1awXdI462TprRwPdExaKhK/zYWRGNoKuW//kIwblZWT4MunturQUyC3sMckeoPO7kCut2djkyPU4SqOmM/HTPOrhJyywcj5OjJXWE2LcFWRMDFdD9PRsBDzXGq9ezE3R55C0M/wpQmHHf6enKufqObi0cb0M5JhPT59FT4pBK0aW7Ycp4YAtkRcI2KQLGZWmNu9WKcpXB3/eAVLwaUDLgfsPmFYIkBkxnwVzAHcEEZLuY4MVYRXCZJZV3DugqXGyZYeI+3MUelwCRRa7BRNLrd1ulroxmiidisxv99BroEBDxRrc3arPx66M8jetFnN/vRdUXmFxBWOZvmcTiUMLyor3MQ8oBVQ8hVNdZpSZt5htoEi88ms6sIj2GlmWG32/6THiiu2x7AVNMapDXsxkGoyX56tswIiWPAUV6/LF1o2c/AUaaMKD1/4SawHrQNYL2DjT7QO/M8y3O0q5cMUF2UUvGjVVWEdpUugQmIQBbAUtWky5wCHnbaZn57uJcn+PNg5r/gJuzeNJ/vEFaQE4KzTMZvPLyQO9A1tiUDm5mFurwyB1aQ3djWVnffkqthHfDLzsJLW1HQNn0BgnhlNM479bJPmUo=';
var encrypted = encrypt(n);
console.log(encrypted);

