# node.btce.api
Simple Node.js wrapper for btc-e.com exchange trade API.

This module requires request, the included hmac-sha512.js file, and querystring.  
Run `$npm install request querystring` in your work directory, 
then add `var btce = require('./node.btce.js');` to your working file.

A file called 'scratch.js' with a small public example has been included.

For private calls, add your trade key and private key to node.btc.js.
To make a call, first setup parameters:
```javascript
var params = {
  nonce: 90,
  pair: btc_usd
};
```
Then make the call:
```javascript
btce.activeorders(params, function(data){
  console.log(data);
});
```
## Nonce counting
I also made a dead simple [nonce counter](https://github.com/broketech/node.nonce.counter)
to help with my private calls.

## TODO
  1.  Package and make available via NPM.
  2.  Flush out rest of v3 public API.
