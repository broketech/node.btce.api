var btce = require('./node.btce.js');
//console.log(btce.info()); // no

btce.ticker('btc_usd', function(data){ // yes
console.log(data);
});
