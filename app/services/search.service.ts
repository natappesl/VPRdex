import { Injectable } from "@angular/core";
//import { Http, Headers, Response, URLSearchParams } from "@angular/http";
import * as fs from "tns-core-modules/file-system";
import * as Constants from '../constants';
import { PageRoute } from "nativescript-angular/router";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import "rxjs/add/operator/switchMap";
//-------------------------
// TODO: Implement Fuse.js!
//-------------------------

export class SearchResult {
    constructor(public id: string, public name: string, image: string) {}
  }

@Injectable ()
export class SearchService {
    public lastQuery: string;
    file: fs.File;
    data: any;
    public searchResults: Array<SearchResult> = [];

    constructor(private pageRoute: PageRoute) {
        let path = fs.path.join(Constants.SPECIES_FOLDER_PATH, "Species.json");
        try {
          this.file = fs.File.fromPath(path);
          this.data = JSON.parse(this.file.readTextSync());
        }
        catch (error) {
          console.error("Error loading species data! Error: \n" + error);
        }
    }

    search(query?: string) {
        this.lastQuery = query;
        this.searchResults = [];
        if (this.data) {
            this.data.forEach(element => {
                if (element.Name.includes(this.lastQuery)) {
                    this.searchResults.push(new SearchResult(element.Id, element.Name, element.Image));
                }
            });
        }
    }
}