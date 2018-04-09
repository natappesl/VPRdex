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
console.log('aws config updated');

var s3 = new AWS.S3();

var params = {
  Bucket: 'natappdata',
  Prefix: 'json/'
};

@Injectable ()
export class aws{
    public infoURL : string = "http://natappdata.s3.amazonaws.com/";
    constructor()
    {
        console.log('aws constructor called\n');
    }
    downloadAll()
    {
        console.log("downloadAll()");

        // s3.listBuckets(function(err, data) {
        //     console.log("listBuckets");
        //     if (err) console.log(err, err.stack); // an error occurred
        //     else     console.log(JSON.stringify(data));           // successful response
        // });

        s3.listObjects(params, function(err, data) {
            console.log("listObjects");
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(JSON.stringify(data));           // successful response
        });
    }
}