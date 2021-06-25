/*
 ////////////////////////////////////////////////////////
 // Bao Nguyen Apps
 // @version v1.0
 // @link https://baonguyenyam.github.io
 // @license MIT
 // @Coding by Bao Nguyen - 0969689893 - 0933112900
 // @baonguyenyam@gmail.com
 ////////////////////////////////////////////////////////
*/function fileExists(e){var i=fs.statSync(e);return i&&i.isFile()}function importFileToSass(e,i){var s="./"+e,r=Sass.findPathVariation(fileExists,s);if(r){var a=fs.readFileSync(r,{encoding:"utf8"});Sass.writeFile(r,a,function(){i({path:r})})}else i({error:'File "'+s+'" not found'})}function importerCallback(e,i){importFileToSass(resolve(e),i)}function compileFile(e,i,s){s||(s=i,i={}),Sass.importer(importerCallback),importFileToSass(e,function(){Sass.compileFile(e,i,s)})}function resolve(e){return path.normalize(path.join(path.dirname(e.previous.replace(/^\/sass\//,"")),e.current)).replace(/\\/g,"/")}var Sass=require("./sass.sync.js"),fs=require("fs"),path=require("path");compileFile.importFileToSass=importFileToSass,compileFile.Sass=Sass,module.exports=compileFile;