import { Component, OnInit } from '@angular/core';
import * as fs from "tns-core-modules/file-system";
import * as Constants from '../../constants';
import { SearchService } from '../../services/search.service';
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

@Component ({
  selector: "catalog",
  moduleId: module.id,
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"],
  providers: [SearchService],
})

export class CatalogComponent {
  file: fs.File;

  constructor (private searchService: SearchService, private pageRoute: PageRoute) {
    this.pageRoute.activatedRoute
    .switchMap(activatedRoute => activatedRoute.params)
    .subscribe((params) => { this.searchService.query = params['query']; });
  }
}