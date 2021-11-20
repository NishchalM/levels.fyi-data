var CryptoJS = require("crypto-js/core");
var aes = require("crypto-js/aes");
require('crypto-js/mode-ecb');
var pako = require('pako');
var atob = require('atob');

function encrypt () {
 var e = "billiondollarvaluation"
      , r = 16;
    return {
        parse: function(n) {
            if (!n.payload)
                return n;
            var t = n.payload
              , a = CryptoJS.MD5(e).toString(CryptoJS.enc.Base64).substr(0, r)
              , o = aes.decrypt({
                ciphertext: CryptoJS.enc.Base64.parse(t)
            }, CryptoJS.enc.Utf8.parse(a), {
                mode: CryptoJS.mode.ECB,
                iv: null
            }).toString(CryptoJS.enc.Base64);
              var trial = atob(o);
              var trial2 = trial.split("");
              var i = atob(o).split("").map(function(e) {
                return e.charCodeAt(0)
            })
            console.log(i);            
              var s = pako.inflate(i, {
                to: "string"
            });             
            return JSON.parse(s)
        }
    }
}

var n ={payload: 'OKGI3HbN4/7rCythSUiS+VAaQBiHb0EEUQGX226GvkhAdKjp20ie3rBbMqIBmT0r5m/SU87tBrvwhd0UtWblkxacaChEvTAO2H/HusjSkEtcnzLoHisL94h15/XXllsBn0YHkRgfKdkmKanFE0DOPU4EfIWf93TFY1b3tTl+ytT3USdPjiKoV3DCg538MKMM13uc1/38vgpm6p3/Ble6wrOd1E6GtI8HKoJsRYpzUpJWYyb1t6/CMZo6kiiA61+RKqPWxMaLPQ6iF+TSYUCG/I7/WR7isWDYCd1nALMiPwNeHIiyQR5wIDq0R2NldWlkAxcHYpDu++7Ut52wBgmSE1Nn1lGGEm01JbhULhvyW3cDeBRmlUiv0yXT2/xTZWTQrTY44wQ8iFP0AGWkE7g7ById4JUbbdBK5dD52K+UZOZ2zLpSHuv0lT7JdRyDNwbuceE62SZKWQWr55SDycKyTt+rd+99/WhIhzyTrxQfxiwgQZ/388XHFiQBbOQPuhYbAw4f/1wEBySGHV3VYOBwQjdh3X5TkotfhhSiGfz/BrbU+Ih0Kjam4LRDNw5WJ3KBS74TngOQrB5dFFzjf6dgKIM52a0C6fAh+xfSx5kAbGV6hxM7/JKVJ03Xt/Vx6RXm5X06Zih3WXbDHi24WuElzF5oJ4uHA+jIgepyqzwzfCaaW1ttz6UfZBLjg77sRjdmBOjwYZAd3JA3hqxYlJU9e8wXQxU6yu0vqZ5Tfb/1ZYL7MYEwlzfMda1lX9JBZnVl1s9ErhQbw+5OIm/cSt1BdnG6qQZ9zUupOBIGTZVi2l1XCRkuf2rq/iCVuLSnLBXBX9Ycv4fbpU1QX21wI3VNL3iZM3pmcFyPWmMKJznJmN2n1/TWEu2bjfK6rSm+iDgt5qSUueiyyMEy3gHwglu78kx55gt1bFsd01elu7WjUd0J1mTsqV4R8GOaAq503V7tZoPMGAuYlOALN3ArDlRRxLzxwKlJ0AT7otjhikcDd/pSVk983VMk05KvLX8s2AURQTov83MZXQnxTh+IlKQNfCswPFuXUAfpWITJISkIQw2Yx7lou/IoVSAeayyAXNtNdj2v5IB9q0jOGP4yysuGW7dcxGoLohx3ZtiCKdyLToTDFx54SFSpmhiP0mPSF4vXeypWunQmMkBxXRRwYQCLY/ZaJ/sjK/zOoo4rs0q0Z4Msl0T/mjSrGuBoq2zieyfYFwFOPThd1WN8ICA5LDyEVQDTUNsdHUvJquq5aB5eXfZ4BSkCI308x3OiYtDuynPsnHVjWampHmaIWZT9SG0Ym4lpOrlcnritlLYco5NuIH7tY+sl3bXHXVgREr7iJKpCjOQRiUbg+e0rRJhyuMh70TaS2xYmajcEH5hlg0Grr5pHjotrEARbYMpt47dTbp9vgiKVRiZVlIzGeZ494by4fb4uxnIrOVSVCgEQc7y2VRw1BjM6RE0G0YMZj+k6a5hCFV3MDZMHKTR1il6WB28UspLQilmP6PWQitnh1QXJpysjO0E2fe+dGZtZ7lTtQTYLp4PnFGMLN+X1rHjb9Rt4zyO8iyT19/xpNw/KGqWucLRa06ZPTbAkvoj2Qv2dKMm2FQF9L9qfHrpVBBy1IfId6GHPn1mgUM+4iwfGT3FPv3G8L0N42Nk4w1yDd3RR5lIkDA9+AEevEraqxzqa8VrJTOBgVrViIp2kr7pn8uV8sAtHtKItdJGBSxHYBFyevIe49kJ37amYUNta5JpyNNP4djzaz2Z5Ex75NIQpYVAKb0VpqgzRWs41GpVhmywLU44qGjNEkAyYNYH1eBI40OGyGBOVGIDj/lAhLX2iFYiH1u3QZKlwpWpjBulXNRQwyb5NyyMNM9x37jrvCqDQWYrmY1fBvUUD4lelxk34VrvVsqr2NPuLekwcZrHBuW2SZ1Rk7zDtE53rkgfyHuX3TuLnfQ=='};
var encrypted = encrypt().parse(n);
console.log(encrypted); 


