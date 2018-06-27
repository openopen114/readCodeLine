var http = require('http');
var fs = require('fs');
var path = require('path'); 
var _ = require('lodash'); 
var _ = require('lodash/core');  
var fp = require('lodash/fp'); 
var array = require('lodash/array');
var object = require('lodash/fp/object'); 
var at = require('lodash/at');
var curryN = require('lodash/fp/curryN');
const lineByLine = require('./node_modules/n-readlines/readlines.js');



var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
})

server.listen(8888);
 
console.log('Server running at http://127.0.0.1:8888/');


let codeFolderPath = '/Users/openopen/Desktop/code/'; 


//Result 
let countResult = {};

 
fs.readdir(codeFolderPath, function(err, _folderNameList) { 
		_.forEach(_folderNameList, function(folder_name) { 
			let targetDir = [];

			//target Project
			targetDir = codeFolderPath + folder_name + '/';
			fs.readdir(targetDir, function(err, files) { 
				// filter pas files to pasFileList
				pasFileList = _.filter(files, function(filename) { return filename.includes(".pas");});
				 
				let codeLineCount = 0;
				_.forEach(pasFileList, function(pasFile) {
					let fullPath = codeFolderPath + folder_name + '/'+ pasFile;
					let codeLine = readLine(fullPath);
					console.log(folder_name + "/" +pasFile + " :" + codeLine)
					codeLineCount += codeLine;
				}) 
				countResult[folder_name] = codeLineCount;
				console.log(countResult);
			});

		});
});

 
// read file code line 
function readLine(_path){
	const liner = new lineByLine(_path);
	let line;
	let lineNumber = 0;
	 
	while (line = liner.next()) { 
		lineNumber++;
	}  
	return lineNumber;
}

 

server.close();
 