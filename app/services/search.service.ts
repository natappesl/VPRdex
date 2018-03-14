import { Injectable } from "@angular/core";
import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { BehaviorSubject } from "rxjs//BehaviorSubject";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";

import * as fs from "tns-core-modules/file-system";
import * as Constants from '../constants';


//-------------------------
// TODO: Implement Fuse.js!
//-------------------------

export class SearchResult {
    constructor(public id?: string, public name?: string, public image?: string) {
    }
  }

@Injectable ()
export class SearchService {
    private _lastQuery: string;
    private _file: fs.File;
    private _jsonData;
    private _searchResults: BehaviorSubject<Array<SearchResult>> = new BehaviorSubject(Array());

    public readonly lastQuery: string = this._lastQuery;
    public readonly searchResults: Observable<Array<SearchResult>> = this._searchResults.asObservable();

    constructor() {
        let path = fs.path.join(Constants.SPECIES_FOLDER_PATH, "Species.json");
        try {
          this._file = fs.File.fromPath(path);
          this._jsonData = JSON.parse(this._file.readTextSync());
        }
        catch (error) {
          console.error("Error loading species data! Error: \n" + error);
        }

        this.search();
    }

    search(query?: string): Observable<Array<SearchResult>> {
        this._lastQuery = query || "";
        let sr = [];

        if (this._jsonData) {
            this._jsonData.forEach(element => {
                if (element.Name.includes(this._lastQuery)) {
                    sr.push(new SearchResult(element.Id, element.Name, element.Image));
                }
            });
        }
        this._searchResults.next(sr);
        return this.searchResults;

    }
}