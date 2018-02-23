import { Component } from '@angular/core';
import { Router, Event } from '@angular/router';
import * as fs from "tns-core-modules/file-system";
import { Page, NavigatedData } from 'tns-core-modules/ui/page';
import { topmost, NavigationEntry } from "tns-core-modules/ui/frame";
import * as Constants from '../constants';

@Component ({
  selector: 'catalog',
  templateUrl: 'catalog/catalog.component.html',
  styleUrls: ['catalog/catalog.component.css']
})

export class CatalogComponent {
  file: fs.File;

  constructor (private router: Router, private page: Page) {
  }

  loadJSON(): void {
    var currentApp = fs.knownFolders.currentApp();
    var path = fs.path.join(Constants.SPECIES_FOLDER_PATH, "/Species.json");
    try {
      this.file = fs.File.fromPath(path);
      console.log("loading " + path);
      //console.log(this.file.readTextSync());
    }
    catch (error) {
      console.error("Error loading species: " + error);
    }
  }

  logJSON(): void {
    if (this.file){
      console.log(this.file.readTextSync());
    }
  }
}