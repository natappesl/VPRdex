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
            try {
                let path = fs.path.join(Constants.SPECIES_FOLDER_PATH, entity.name);
                let file = fs.File.fromPath(path);
                jsonDataTemp[entity.name] = JSON.parse(file.readTextSync());;
            }
            catch (error) {
                console.error("Error loading species data! Error: \n" + error);
                console.log(entity.name);
            }
            return true;
        });        

        this._jsonData = jsonDataTemp;

        // Ask database for updates, populate the files & json folder

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
        let types = ["mammals","mammal","plants","plant","birds","bird","branchiopoda","branchiopod","branchio"];

        if (this._jsonData) {
            for (var v in this._jsonData){
                let sp = this._jsonData[v];
                if ((sp.name && sp.name.includes(this._lastQuery)) || (sp.tags && sp.tags.includes(this._lastQuery)) || (sp.type && sp.type.includes(this._lastQuery)) ) {
                    this._results.push(new SpeciesModel(sp.imageURL,sp.name,sp.scientificName,sp.overview,sp.behavior,sp.habitat,sp.size,sp.conservationStatus,sp.type,sp.tags,sp.references));
                }
            }
            
            // If nothing is found, try splitting the query into multiple words and searching these
            if (this._results.length==0 && this.lastQuery.includes(" ")){
                let stringArr = this._lastQuery.split(/(\s+)/).filter(function(e){return e.trim().length > 1;});
                console.log("query: " + this._lastQuery);
                console.log("stringArr: " + stringArr);
                
                for (var v in this._jsonData){
                    let typeQuery = "-1"
                    for (var qs in stringArr){
                        let queryPiece = stringArr[qs].toLowerCase();
                        //If one of the queries is a type, first add all species of that type to the list
                        //console.log ("indexOf "+queryPiece+": "+types.indexOf(queryPiece.toLowerCase()));
                        if (types.indexOf(queryPiece.toLowerCase())>-1){
                            //console.log("Type query detected: "+queryPiece);
                            typeQuery = queryPiece;
                            let sp = this._jsonData[v];
                            for (var sp_property_iterator in sp){
                                let sp_property = sp[sp_property_iterator];
                                //console.log(sp_property);
                                if (sp_property.length>2 && sp_property.toLowerCase().includes(queryPiece)){
                                    this._results.push(new SpeciesModel(sp.imageURL,sp.name,sp.scientificName,sp.overview,sp.behavior,sp.habitat,sp.size,sp.conservationStatus,sp.type,sp.tags,sp.references));
                                    break;
                                }
                            }
                        }
                    }
                    for (var qs in stringArr){
                        let queryPiece = stringArr[qs].toLowerCase();
                        //In the case of no type query, we just search through all of the properties and add species that include any of the queries
                        if (typeQuery=="-1"){
                            console.log("No type query detected");
                            let sp = this._jsonData[v];
                            for (var sp_property_iterator in sp){
                                let sp_property = sp[sp_property_iterator];
                                //console.log(sp_property);
                                if (sp_property.length>2 && sp_property.toLowerCase().includes(queryPiece)){
                                    this._results.push(new SpeciesModel(sp.imageURL,sp.name,sp.scientificName,sp.overview,sp.behavior,sp.habitat,sp.size,sp.conservationStatus,sp.type,sp.tags,sp.references));
                                    break;
                                }
                            }
                        }
                        //In the case of a type query, we search through the already added species and remove ones that do not include the keywords of the other queries
                        if (typeQuery!="-1" && queryPiece!=typeQuery){
                            //console.log("Type query detected");
                            for (var testSpecies_iter = 0; testSpecies_iter<this._results.length; testSpecies_iter++){
                                let testSpecies = this._results[testSpecies_iter];
                                var keepBool = false;
                                for (var sp_property_iterator in testSpecies){
                                    let sp_property = testSpecies[sp_property_iterator];
                                    //console.log(sp_property);
                                    if (sp_property.length>2 && sp_property.toLowerCase().includes(queryPiece)){
                                        keepBool = true;
                                        break;
                                    }
                                }
                                if (!keepBool){
                                    console.log("Removing species since the other query was not found");
                                    this._results.splice(testSpecies_iter,1);
                                }
                            }
                        }
                    }
                }
            }
        }
        
        this.searchResults.next(this._results);
        return this.searchResults.asObservable();
    }
}