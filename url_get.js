var util = require('util');
var fs = require('fs');
var rest = require('restler');
//var target = string('http://google.com');


var main = function(target)
 {
	var fetch = rest.get('http://google.com');
	console.log(fetch);

};
