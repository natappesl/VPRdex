import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { SearchService } from '../../services/search.service';
import { PageRoute } from "nativescript-angular/router";
import "rxjs/add/operator/switchMap";

@Component ({
  selector: "catalog",
  moduleId: module.id,
  templateUrl: "./catalog.component.html",
  styleUrls: ["./catalog.component.css"],
  providers: [SearchService],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

// TODO: Make searchservice private

export class CatalogComponent {
  constructor (private searchService: SearchService, private pageRoute: PageRoute) {
    this.pageRoute.activatedRoute
    .switchMap(activatedRoute => activatedRoute.params)
    .subscribe((params) => { this.searchService.lastQuery = params['query']; });
  }

  ngOnInit () {
    this.searchService.showAll();
  }
}