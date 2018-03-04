import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import * as fs from "tns-core-modules/file-system";
import * as Constants from '../constants';

@Injectable ()
export class SearchService {
    public lastQuery: string;
    file: fs.File;
    data: any;
    public searchResults: Array<any>;

    constructor() {
        let path = fs.path.join(Constants.SPECIES_FOLDER_PATH, "Species.json");
        try {
          this.file = fs.File.fromPath(path);
          this.data = JSON.parse(this.file.readTextSync());
        }
        catch (error) {
          console.error("Error loading species data! Error: \n" + error);
        }
    }

    showAll() {
        this.searchResults = [];
        if (this.data) {
            this.data.forEach(element => {
                    this.searchResults.push(element);
            });
        }
    }

    search () {
        this.searchResults = [];
        if (this.data) {
            this.data.forEach(element => {
                if (element.Name.includes(this.lastQuery)) {
                    this.searchResults.push(element);
                }
            });
        }
    }
}