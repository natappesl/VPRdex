import { Injectable, OnInit } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs//BehaviorSubject";
import { SpeciesModel } from "../models/species.model";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import * as fs from "tns-core-modules/file-system";
import * as Constants from '../constants';


//-------------------------
// TODO: Implement Fuse.js!
//-------------------------

@Injectable ()
export class SearchService {
    private _file: fs.File;
    private _jsonData = {};
    private _lastQuery: string;
    private _results: Array<SpeciesModel>;

    public readonly searchResults: BehaviorSubject<Array<SpeciesModel>>;

    constructor() {
        var dataPath_json = fs.path.join(fs.knownFolders.documents().path, "app/data/json");
        var dataFolder_json = fs.Folder.fromPath(dataPath_json);
        let jsonDataTemp = {};
        dataFolder_json.eachEntity(function (entity) {
            //console.log(entity.name);

            try {
                let path = fs.path.join(Constants.SPECIES_FOLDER_PATH, entity.name);
                let file = fs.File.fromPath(path);
                jsonDataTemp[entity.name] = JSON.parse(file.readTextSync());;
            }
            catch (error) {
                console.error("Error loading species data! Error: \n" + error);
                console.log(entity.name);
            }

            // Return true to continue, or return false to stop the iteration.
            return true;
        });        

        this._jsonData = jsonDataTemp;

        // Ask database for updates, populate the files & json folder
        
        //let path = fs.path.join(Constants.SPECIES_FOLDER_PATH, "Species.json");
        // try {
        //     this._file = fs.File.fromPath(path);
        //     this._jsonData = JSON.parse(this._file.readTextSync());
        // }
        // catch (error) {
        //     console.error("Error loading species data! Error: \n" + error);
        // }

        this._results = new Array<SpeciesModel>({});
        this.searchResults = new BehaviorSubject<Array<SpeciesModel>>(this._results);
        this.search();

    }
    public get lastQuery(): string {
        return this._lastQuery;
    }
    public search(query?: string): Observable<Array<SpeciesModel>> {
        this._lastQuery = query || "";
        this._results.length = 0;

        if (this._jsonData) {
            for (var v in this._jsonData){
                //console.log(v);
                //console.log(v.toString());
                let sp = this._jsonData[v];
                //console.log(sp.imageURL);
                //console.log(sp.name);
                if(sp.name)
                {
                    try {
                        this._results.push(new SpeciesModel(sp.imageURL,sp.name,sp.scientificName,sp.overview,sp.behavior,sp.habitat,sp.size,sp.conservationStatus,sp.type,sp.tags,sp.references));
                    }
                    catch (error) {
                        console.error("Error pushing SpeciesModel! Error: \n" + error);
                    }
                }
            }
            // this._jsonData.forEach(element => {
            //     if (element.Name && element.Name.includes(this._lastQuery)) {
            //         this._results.push(new SpeciesModel(element.Id, element.Name, "", element.Image));
            //     }
            // });
        }
        
        this.searchResults.next(this._results);
        return this.searchResults.asObservable();
    }
}