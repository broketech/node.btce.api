const base_url = 'https://btc-e.com/api/2/';
const v3_url = 'https://btc-e.com/api/3/';
const api_key = 'APIKEY';
const api_secret = 'APISECRET';

var hmac = require('./hmac-sha512.js');
var request = require('request');

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
/*  btce.prototype.getinfo = function(cb)
  btce.prototype.trade = function(pair, type, rate, amount, cb)
  btce.prototype.activeorders = function(pair, cb)
  btce.prototype.orderinfo = function(order_id, cb)
  btce.prototype.cancelorder = function(order_id, cb)
  btce.prototype.tradehistory = function(params, cb)
  btce.prototype.transhistory = function(params, cb)
  btce.prototype.withdrawcoin = function(coinName, amount, address, cb)
  btce.prototype.createcoupon = function(currency, amount, cb)
  btce.prototype.redeemcoupon = function(coupon, cb)
*/
function privrequest(options, cb){
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
