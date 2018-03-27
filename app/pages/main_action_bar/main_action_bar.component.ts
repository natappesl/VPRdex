import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, Input } from '@angular/core';
import { Page, ShownModallyData, NavigatedData } from "tns-core-modules/ui/page";
import { NavigationStart, NavigationEnd, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';
import { TextField } from "ui/text-field";
import { Label } from "ui/label";
import { SearchService } from "../../services/search.service";
import { TabView } from "ui/tab-view";

@Component ({
  selector: 'main-action-bar',
  moduleId: module.id,
  templateUrl: './main_action_bar.component.html',
  styleUrls: ['./main_action_bar.component.css']
})

export class MainActionBarComponent implements AfterViewInit {
  showSearch: boolean = false;
  @Input() customTitle: string;

  constructor(public _searchService: SearchService, private _routerExtensions: RouterExtensions, private _page: Page) {
  }

  ngOnInit() {
    this.showSearch = false;
  }

  ngAfterViewInit() {
    if (this.customTitle) {
      let titleView = <Label>this._page.getViewById("action-bar-title");
      titleView.text = this.customTitle;
    }
  }

  toggleSearch(event): void {
    // searchBar is undefined when !showSearch
    let searchBar = <TextField> this._page.getViewById("main-search-bar");
    if (searchBar) {
      this._searchService.search(searchBar.text);
      let homeTabView = <TabView> this._page.getViewById('home-tab-view');
      if (homeTabView) homeTabView.selectedIndex = 1;
      else this._routerExtensions.navigate(['home', { outlets: { catalogoutlet: 'catalog', aboutoutlet: 'about' } }], { queryParams: { jumpToCatalog: true } });
    }
    this.showSearch = !this.showSearch;
  }

  clearSearch(event) {
  }
}