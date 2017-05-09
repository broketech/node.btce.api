const base_url = 'https://btc-e.com/api/2/';
const v3_url = 'https://btc-e.com/api/3/';
const tapi_url = 'https://btc-e.com/tapi';
var api_key = 'API_KEY';
var api_secret = 'API_SECRET';

var request = require('request');
var qstring = require('querystring');
var hmac = require('./hmac-sha512.js');



// public methods
module.exports.depth = function(market, cb){  // market, callback
  var options = {
    url: base_url+market+'/depth'
  };
  pubrequest(options, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.ticker = function(market, cb){  // market, callback
  var options = {
    url: base_url+market+'/ticker'
  };
  pubrequest(options, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.trades = function(market, cb){  // market, callback
  var options = {
    url: base_url+market+'/trades'
  };
  pubrequest(options, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.fee = function(market, cb){  // market, callback
  var options = {
    url: base_url+market+'/fee'
  };
  pubrequest(options, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.info = function info(cb){  // callback
  var options = {
    url: v3_url+'info'
  };
  pubrequest(options, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
// private methods
module.exports.getinfo = function(params, cb){
  var hashme = qstring.stringify(params)+"&method=getInfo";
  var signed = hmac.HmacSHA512(hashme, api_secret).toString(hmac.enc.Hex);
  privrequest(hashme, signed, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.trade = function(params, cb){
  var hashme = qstring.stringify(params)+"&method=Trade";
  var signed = hmac.HmacSHA512(hashme, api_secret).toString(hmac.enc.Hex);
  privrequest(hashme, signed, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.activeorders = function(params, cb){
  var hashme = qstring.stringify(params)+"&method=ActiveOrders";
  var signed = hmac.HmacSHA512(hashme, api_secret).toString(hmac.enc.Hex);
  privrequest(hashme, signed, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.orderinfo = function(params, cb){
  var hashme = qstring.stringify(params)+"&method=OrderInfo";
  var signed = hmac.HmacSHA512(hashme, api_secret).toString(hmac.enc.Hex);
  privrequest(hashme, signed, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.cancelorder = function(params, cb){
  var hashme = qstring.stringify(params)+"&method=CancelOrder";
  var signed = hmac.HmacSHA512(hashme, api_secret).toString(hmac.enc.Hex);
  privrequest(hashme, signed, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.tradehistory = function(params, cb){
  var hashme = qstring.stringify(params)+"&method=TradeHistory";
  var signed = hmac.HmacSHA512(hashme, api_secret).toString(hmac.enc.Hex);
  privrequest(hashme, signed, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.transhistory = function(params, cb){
  var hashme = qstring.stringify(params)+"&method=TransHistory";
  var signed = hmac.HmacSHA512(hashme, api_secret).toString(hmac.enc.Hex);
  privrequest(hashme, signed, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.withdrawcoin = function(params, cb){
  var hashme = qstring.stringify(params)+"&method=WithdrawCoin";
  var signed = hmac.HmacSHA512(hashme, api_secret).toString(hmac.enc.Hex);
  privrequest(hashme, signed, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.createcoupon = function(params, cb){
  var hashme = qstring.stringify(params)+"&method=CreateCoupon";
  var signed = hmac.HmacSHA512(hashme, api_secret).toString(hmac.enc.Hex);
  privrequest(hashme, signed, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
module.exports.redeemcoupon = function(params, cb){
  var hashme = qstring.stringify(params)+"&method=RedeemCoupon";
  var signed = hmac.HmacSHA512(hashme, api_secret).toString(hmac.enc.Hex);
  privrequest(hashme, signed, function(sdata){
      if(sdata){
        return cb(sdata);
      };
  });
}
// private function call
function privrequest(hash, sign, cb){
  var privDefaults = request.defaults({
    method: "POST",
    form: hash,
    headers: {
      'Key': api_key,
      'Sign': sign
    }
  });
  privDefaults(tapi_url, function(error, response, body){
      if(error){
        return (error, response.statusCode);
      };
      if(!error && response.statusCode == 200){
        var data = JSON.parse(body);
        //JSON.parse(body);

        cb(data);
      };
    }
  );
}
// public function call
function pubrequest(options, cb){
  //console.log(options)
  request(
    options, function(error, response, body){
      if(error){
        return error;
      };
      if(!error && response.statusCode == 200){
        var data = JSON.parse(body);
        //JSON.parse(body);
        cb(data);
      };
    }
  );
}
