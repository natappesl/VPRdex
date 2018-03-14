import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { SpeciesModel } from "../../models/species.model";
import { Page } from "tns-core-modules/ui/page";
import { Subject } from 'rxjs/Subject';
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/of';
import * as listView from "tns-core-modules/ui/list-view";

@Component ({
  selector: "catalog",
  moduleId: module.id,
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"],
  providers: [SearchService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class CatalogComponent {
  list: listView.ListView;
  results$: Observable<Array<SpeciesModel>>;

  constructor(private _searchService: SearchService, private _page: Page) {

  }

  ngOnInit() {
    this.list = <listView.ListView>this._page.getViewById('list');
    this.results$ = this._searchService.search();
  }
}