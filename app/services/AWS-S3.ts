import { Injectable } from "@angular/core";
import * as fs from "tns-core-modules/file-system";
require('nativescript-nodeify');
import * as AWS from "aws-sdk";
//import S3 = require('aws-sdk/clients/s3');

//import AWS = require('aws-sdk');
//AWS.config.loadFromPath('./aws-credentials.json');

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
        AWS.config.update({
            accessKeyId: "replacethis",
            secretAccessKey: "replacethis",
            region: "us-west-2"
        });
        console.log('aws config updated');
    }
    downloadAll()
    {
        console.log("downloadAll()");

        s3.listBuckets(function(err, data) {
            console.log("listBuckets");
            if (err) console.log(err, err.stack); // an error occurred
            else     console.log(data);           // successful response
        });

        // s3.listObjects(params, function(err, data) {
        //     console.log("listObjects");
        //     if (err) console.log(err, err.stack); // an error occurred
        //     else     console.log(data);           // successful response
        // });
    }
}