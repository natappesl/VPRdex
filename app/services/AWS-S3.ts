import { Injectable } from "@angular/core";
import * as fs from "tns-core-modules/file-system";
require('nativescript-nodeify');
import * as AWS from "aws-sdk";
var CryptoJS = require("crypto-js");

// Easy access for necessary paths
var documents = fs.knownFolders.documents();
var dataPath = fs.path.join(documents.path, "app/data/")
var dataFolder = fs.Folder.fromPath(dataPath);
var dataPath_json = fs.path.join(dataPath, "json"); //JSON files go here
var dataFolder_json = fs.Folder.fromPath(dataPath_json);
var dataPath_files = fs.path.join(dataPath, "files"); //Pictures go here
var dataFolder_files = fs.Folder.fromPath(dataPath_files);

var currentData = {}; //Populated with current data, then used to prevent downloading redundant data
currentData["json/"] =true;
currentData["files/"] =true;
var s3; // Will be initialized in constructor, used for accessing AWS S3
//Simple bucket params for use in listing objects.
var params = {
    Bucket: 'natappdata',
    //Prefix: 'json/'
    }; 

@Injectable ()
export class aws{
    public infoURL : string = "http://natappdata.s3.amazonaws.com/";
    constructor(){
        console.log('aws constructor called\n');
        //Below is simple key encryption to keep away the most simple of GitHub bots from getting the read-only s3 keys 
        var bytes  = CryptoJS.AES.decrypt('U2FsdGVkX19YCaCNV5FHM0yCpkYyYlQTJ7ffvnasME3VvaZIdlAvd+FGprYEmc1q', 'All this does is stop bots from spam downloading our database');
        var aKI = bytes.toString(CryptoJS.enc.Utf8);
        bytes  = CryptoJS.AES.decrypt('U2FsdGVkX1+oti7CzBX4FhdK6czxvVQYv5SYIzSR+1O39Tddd+hoYnnH0tZ/L/SErM+phsncocetesUFC8YIXA==', 'All this does is stop bots from spam downloading our database');
        var sAK = bytes.toString(CryptoJS.enc.Utf8);

        AWS.config.update({
            accessKeyId: aKI,
            secretAccessKey: sAK
        });
        console.log('AWS config updated');

        //S3 variable creation MUST come after updating the config, otherwise it will not work
        s3 = new AWS.S3();

        // Populate currentData in the json folder
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

        // Populate currentData in the files folder
        dataFolder_files.getEntities()
        .then(function (entities) {
            entities.forEach(function (entity) {
                //console.log(entity.name);
                currentData["files/"+entity.name] = entity;
            });
        }, function (error) {
            console.log("fs error" + error.toString());
        });
    }

    //Function that downloads any JSON files on the database that do not exist locally
    downloadAll(){
        s3.listObjects(params, function(err, data) {
            if (err) console.log(err.toString(), err.stack.toString()); // an error occurred
            else{
                //Check if each database object exists locally
                for (var i in data.Contents){
                    if(currentData[data.Contents[i].Key]){
                        //console.log("File already exists!")
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
                                console.log('getParams.Key: '+ getParams.Key);
                                if (getData.ContentType == "application/json")
                                {
                                    //console.log((getData.Body));           // successful response
                                    var writeFile = dataFolder.getFile(getParams.Key);
                                    //Writing text to the file.
                                    //console.log(getData.Body);
                                    console.log("writeFile: " + writeFile.path);
                                    writeFile.writeText(getData.Body.toString())
                                    .then(function () {
                                        // writeFile.readText().then (result => {
                                        //     console.log ("file content: " + JSON.stringify(result));
                                        // })
                                        // Succeeded writing to the file.
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
            }     
        });
    }
}