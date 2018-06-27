var http = require('http');
var fs = require('fs');
var path = require('path');
// Load the full build.
var _ = require('lodash');
// Load the core build.
var _ = require('lodash/core');
// Load the FP build for immutable auto-curried iteratee-first data-last methods.
var fp = require('lodash/fp');
 
// Load method categories.
var array = require('lodash/array');
var object = require('lodash/fp/object');
 
// Cherry-pick methods for smaller browserify/rollup/webpack bundles.
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
const lineByLine = require('./node_modules/n-readlines/readlines.js');


http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');


targetList = ['/Users/openopen/Desktop/YSPUB109R/Unit1.pas','/Users/openopen/Desktop/YSPUB109R/Unit2.pas'];
codeLine = [];
// const liner = new lineByLine('/Users/openopen/Desktop/YSPUB109R/Unit2.pas');
 
// _.forEach(targetList, function(value) {
//   console.log(value);
//   codeLine.push(read(value)); 
// });
// console.log(codeLine);
 


function read(_path){
	const liner = new lineByLine(_path);
 
	let line;
	let lineNumber = 0;
	 
	while (line = liner.next()) {
	        // console.log('Line ' + lineNumber + ': ' + line.toString('ascii'));
	            lineNumber++;
	}
	 console.log(lineNumber); 
	 // console.log(liner.getFd());
	 // liner.close(); 
	console.log('end of line reached');
	return lineNumber;
}


 

fs.readdir('/Users/openopen/Desktop/YSPUB109R/', function(err, files) {
//     files.filter(function(file) { return file.substr(-5) === '.html'; })
//          .forEach(function(file) { fs.readFile(file, 'utf-8', function(err, contents) { inspectFile(contents); }); });
	console.log(files);
	result = _.filter(files, function(filePath) { return filePath.includes(".pas");});
 	console.log(result);
});

function inspectFile(contents) {
    if (contents.indexOf('data-template="home"') != -1) {
        // do something
    }
}

 