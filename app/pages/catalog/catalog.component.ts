import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SpeciesModel } from "../../models/species.model";
import { Page } from "tns-core-modules/ui/page";
import { Subject } from 'rxjs';
import { Observable } from "rxjs";
import * as listView from "tns-core-modules/ui/list-view";
import { Subscriber } from 'rxjs';
import { Subscription } from 'rxjs';
import {aws} from '../../services/AWS-S3';

@Component ({
  selector: "catalog",
  moduleId: module.id,
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CatalogComponent {
  list: listView.ListView;
  results$: Observable<SpeciesModel[]>;
  results: SpeciesModel[];
  constructor(public _searchService: SearchService, public AWSS3: aws, private _page: Page) {
  }

  ngOnInit() {
    this.list = this._page.getViewById('list');
    this.results$ = this._searchService.searchResults.asObservable();
    this.AWSS3.downloadAll();
  }

  onItemTap() {
  }
}