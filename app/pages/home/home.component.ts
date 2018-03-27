import { Component, AfterViewInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { RouterEvent, NavigationEnd } from "@angular/router";
import { Page } from "ui/page";
import { TabView } from "ui/tab-view";
import 'rxjs/add/operator/filter';

@Component ({
  selector: "home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})

export class HomeComponent implements AfterViewInit {
  private _tabView: TabView;
  constructor(private _page: Page, private _pageRoute: PageRoute, private _routerExtensions: RouterExtensions) {
  }

  ngAfterViewInit() {
    this._tabView = this._page.getViewById('tab-view');
    this._pageRoute.activatedRoute
    .switchMap(activatedRoute => activatedRoute.queryParams)
    .forEach((params) => {
      if (params["jumpToCatalog"]) {
        this._tabView.selectedIndex = 1;
      }
      });
  }

}