import { Injectable } from "@angular/core";
import * as fs from "tns-core-modules/file-system";
require('nativescript-nodeify');
import * as AWS from "aws-sdk";
var CryptoJS = require("crypto-js");

// Decrypt 
var bytes  = CryptoJS.AES.decrypt('U2FsdGVkX19YCaCNV5FHM0yCpkYyYlQTJ7ffvnasME3VvaZIdlAvd+FGprYEmc1q', 'All this does is stop bots from spam downloading our database');
var aKI = bytes.toString(CryptoJS.enc.Utf8);
bytes  = CryptoJS.AES.decrypt('U2FsdGVkX1+oti7CzBX4FhdK6czxvVQYv5SYIzSR+1O39Tddd+hoYnnH0tZ/L/SErM+phsncocetesUFC8YIXA==', 'All this does is stop bots from spam downloading our database');
var sAK = bytes.toString(CryptoJS.enc.Utf8);

AWS.config.update({
    accessKeyId: aKI,
    secretAccessKey: sAK
});
console.log('AWS config updated');

var s3 = new AWS.S3();

var params = {
  Bucket: 'natappdata',
  //Prefix: 'json/'
};

var documents = fs.knownFolders.documents();
// console.log("documents:" +JSON.stringify(documents));
// console.log("documents path:" +documents.path);

var dataPath = fs.path.join(documents.path, "app/data/")
var dataFolder = fs.Folder.fromPath(dataPath);
// var exists = fs.File.exists(JSONpath);
// console.log("exists: " + exists);
var dataPath_json = fs.path.join(dataPath, "json");
var dataFolder_json = fs.Folder.fromPath(dataPath_json);
var dataPath_files = fs.path.join(dataPath, "files");
var dataFolder_files = fs.Folder.fromPath(dataPath_files);

var currentData = {};
currentData["json/"] =true;
currentData["files/"] =true;

dataFolder_json.getEntities()
    .then(function (entities) {
        // entities is array with the document's files and folders.
        entities.forEach(function (entity) {
            //console.log(entity.name);
            currentData["json/"+entity.name] = entity;
        });
    }, function (error) {
        // Failed to obtain folder's contents.
        console.log("fs error" + error.toString());
    });

dataFolder_files.getEntities()
    .then(function (entities) {
        entities.forEach(function (entity) {
            //console.log(entity.name);
            currentData["files/"+entity.name] = entity;
        });
    }, function (error) {
        console.log("fs error" + error.toString());
    });

@Injectable ()
export class aws{
    public infoURL : string = "http://natappdata.s3.amazonaws.com/";
    constructor(){
        //console.log('aws constructor called\n');
    }

    downloadAll(){
        console.log("downloadAll()");

        console.log("Printing local data: ");
        for (var v in currentData)
        {
            console.log(v.toString());
        }

        s3.listObjects(params, function(err, data) {
            console.log("listObjects");
            if (err) console.log(err.toString(), err.stack.toString()); // an error occurred
            else{
                for (var i in data.Contents){
                    //console.log(data.Contents[i].Key);
                    if(currentData[data.Contents[i].Key]){
                        console.log("File already exists!")
                    }
                    else{
                        console.log(data.Contents[i].Key + " does not exist, writing...")
                        
                        var getParams = {
                            Bucket: "natappdata",
                            Key: data.Contents[i].Key
                        };
                        
                        s3.getObject(getParams, function(err, getData) {
                            if (err) console.log(err.toString(), err.stack.toString()); // an error occurred
                            else{
                                if (getData.ContentType == "application/json")
                                {
                                    //console.log((getData.Body));           // successful response
                                    var writeFile = dataFolder.getFile(data.Contents[i].Key);
                                    //Writing text to the file.
                                    writeFile.writeText(JSON.stringify(getData.Body))
                                    .then(function () {
                                        // Succeeded writing to the file.
                                        console.log("File write success")
                                    }, function (error) {
                                        // Failed to write to the file.
                                        console.log("File write error: ");
                                        console.log(error.toString());
                                    });
                                }
                            }
                        });
                    }
                }
                //console.log(JSON.stringify(data));           // successful response/
            }     
        });
    }
}