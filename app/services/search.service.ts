import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import * as fs from "tns-core-modules/file-system";
import * as Constants from '../constants';

@Injectable ()
export class SearchService {
    query: string;
    file: fs.File;
    data: any;

    constructor() {
        let currentApp = fs.knownFolders.currentApp();
        let path = fs.path.join(Constants.SPECIES_FOLDER_PATH, "/species.json");
        try {
          this.file = fs.File.fromPath(path);
          console.log("loading " + path);
          console.log(this.file.readTextSync());
        }
        catch (error) {
          console.error("Error loading species: " + error);
        }
    }



    search (q: string) {
        this.query = q;
        //console.log (this.query);
    }
}