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



var server = http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.end('Hello World\n');
})

server.listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');


let codeFolderPath = '/Users/openopen/Desktop/code/';
//scan folder and rename folder name
// fs.readdir(codeFolderPath, function(err, _folderNameList) { 
// 		_.forEach(_folderNameList, function(folder_name) { 
// 			let res = folder_name.substring(0, 9);
// 			let originPath = codeFolderPath + folder_name;
// 			let renamePath = codeFolderPath + folder_name.substring(0, 9);;

// 			fs.rename(originPath , renamePath, function (err) {
// 				if (err) throw err;
// 				console.log('renamed complete');
// 			});
// 		});
// });

let countResult = [];

fs.readdir(codeFolderPath, function(err, _folderNameList) { 
		_.forEach(_folderNameList, function(folder_name) { 
			let targetDir = [];

			//target Project
			targetDir = codeFolderPath + folder_name + '/';
			fs.readdir(targetDir, function(err, files) { 
				// filter pas files to pasFileList
				pasFileList = _.filter(files, function(filename) { return filename.includes(".pas");});
				console.log(targetDir + " === pasFileList ===");
				console.log(pasFileList);

				let codeLineCount = 0;
				_.forEach(pasFileList, function(pasFile) {
					let fullPath = codeFolderPath + folder_name + '/'+ pasFile;
					console.log("fullPath:" + fullPath);
					let codeLine = readLine(fullPath);
					console.log(pasFile + " codeLine:" + codeLine)
					codeLineCount += codeLine;
				})

				console.log("=== " + folder_name + "Total: " + codeLineCount + "===");
				let resultString = "";
				resultString = "{" + folder_name + ":" + codeLineCount + "}";
				console.log(resultString);
				countResult.push(resultString);
				console.log(countResult);
			});
		});
});


//codeFolderPath
// projectNameList = ['YSPUB109R','YSPUB203F'];
// let countResult = [];
 
// _.forEach(projectNameList, function(projectName) {
// 	console.log(projectName);
// 	dirPath = codeFolderPath + projectName;
// 	console.log(dirPath);
// 	//read Dir
// 	fs.readdir(dirPath, function(err, files) { 
// 		// filter pas files
// 		pasFileList = _.filter(files, function(filename) { return filename.includes(".pas");});
// 		console.log(" === pasFileList ===");
// 		console.log(pasFileList);


// 		let codeLineCount = 0;
// 		_.forEach(pasFileList, function(pasFile) {
// 			let fullPath = codeFolderPath + projectName + '/'+ pasFile;
// 			console.log("fullPath:" + fullPath);
// 			let codeLine = readLine(fullPath);
// 			console.log(pasFile + " codeLine:" + codeLine)
// 			codeLineCount += codeLine;
// 		})


// 		console.log("=== " + projectName + "Total: " + codeLineCount + "===");
// 		console.log(countResult);

// 		let resultString = "";
// 		resultString = "{" + projectName + ":" + codeLineCount + "}";
// 		console.log(resultString);
// 		countResult.push(resultString);





// 	});
   
// });
// console.log("=================")
// console.log(countResult);
 

// targetList = ['/Users/openopen/Desktop/YSPUB109R/Unit1.pas','/Users/openopen/Desktop/YSPUB109R/Unit2.pas'];
codeLine = [];
// const liner = new lineByLine('/Users/openopen/Desktop/YSPUB109R/Unit2.pas');
 
// _.forEach(targetList, function(value) {
//   console.log(value);
//   codeLine.push(read(value)); 
// });
// console.log(codeLine);
 


function readLine(_path){
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


// let aaa = readLine('/Users/openopen/Desktop/code/YSPUB109R/Unit1.pas' )
// console.log("**********"+aaa);

 

// fs.readdir('/Users/openopen/Desktop/YSPUB109R/', function(err, files) {
// //     files.filter(function(file) { return file.substr(-5) === '.html'; })
// //          .forEach(function(file) { fs.readFile(file, 'utf-8', function(err, contents) { inspectFile(contents); }); });
// 	console.log(files);
// 	result = _.filter(files, function(filePath) { return filePath.includes(".pas");});
//  	console.log(result);
// });

 
//var res = str.substring(0, 9);

// fs.rename('/Users/openopen/Desktop/readCodeLine2', '/Users/openopen/Desktop/readCodeLine3', function (err) {
//   if (err) throw err;
//   console.log('renamed complete');
// });


server.close();
 