import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Page, ShownModallyData, NavigatedData } from "tns-core-modules/ui/page";
import { NavigationStart, NavigationEnd, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';
import { TextField } from "ui/text-field";
import { SearchService } from "../../services/search.service";
import * as dialogs from "ui/dialogs";

@Component ({
  selector: 'MainActionBar',
  moduleId: module.id,
  templateUrl: './main_action_bar.component.html',
  styleUrls: ['./main_action_bar.component.css'],
  providers: [SearchService],
})

export class MainActionBarComponent implements AfterViewInit {
  public showSearch: boolean = false;

  constructor(private searchService: SearchService, private routerExtensions: RouterExtensions) {
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
      this.searchService.search(searchBar.text);
    }

    this.showSearch = !this.showSearch;
  }

  clearSearch(event) {
  }
}