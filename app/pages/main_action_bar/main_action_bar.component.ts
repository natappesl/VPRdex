import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Page, ShownModallyData, NavigatedData } from "tns-core-modules/ui/page";
import { NavigationStart, NavigationEnd, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';
import { TextField } from "ui/text-field";
import { SearchService } from "../../services/search.service";

@Component ({
  selector: 'main-action-bar',
  moduleId: module.id,
  templateUrl: './main_action_bar.component.html',
  styleUrls: ['./main_action_bar.component.css']
})

export class MainActionBarComponent implements AfterViewInit {
  public showSearch: boolean = false;

  constructor(public _searchService: SearchService, private _routerExtensions: RouterExtensions) {
  }

  ngOnInit() {
    this.showSearch = false;
  }

  ngAfterViewInit() {
  }

  toggleSearch(event): void {
    // Perform search logic before switching flag,
    // as searchBar is undefined when !showSearch

    let searchBar = <TextField> event.object;
    if (this.showSearch) {
      //this._searchService.search(searchBar.text);
      this._routerExtensions.navigate(["/search"], { queryParams: {query: searchBar.text}})

    }

    this.showSearch = !this.showSearch;
  }

  clearSearch(event) {
  }
}