import { Injectable } from '@angular/core';
import { ObservableArray, ChangedData, ChangeType } from "tns-core-modules/data/observable-array";
import * as fs from "tns-core-modules/file-system";
import * as Constants from '../constants';
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";
//-------------------------
// TODO: Implement Fuse.js!
//-------------------------

@Injectable ()
export class SearchService {
    public lastQuery: string;
    file: fs.File;
    data: any;
    public searchResults = new ObservableArray();
    constructor(private pageRoute: PageRoute) {
        let path = fs.path.join(Constants.SPECIES_FOLDER_PATH, "Species.json");
        try {
          this.file = fs.File.fromPath(path);
          this.data = JSON.parse(this.file.readTextSync());
        }
        catch (error) {
          console.error("Error loading species data! Error: \n" + error);
        }

        this.pageRoute.activatedRoute
        .switchMap(activatedRoute => activatedRoute.params)
        .subscribe((params) => { this.lastQuery = params['query']; });
    }

    showAll() {
        this.searchResults = new ObservableArray();
        if (this.data) {
            this.data.forEach(element => {
                    this.searchResults.push(element);
            });
        }
    }

    search () {
        this.searchResults = new ObservableArray();
        if (this.data) {
            this.data.forEach(element => {
                if (element.Name.includes(this.lastQuery)) {
                    this.searchResults.push(element);
                }
            });
        }
    }
}