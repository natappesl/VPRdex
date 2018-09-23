import { Component, AfterViewInit } from "@angular/core";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";
import { RouterEvent, NavigationEnd } from "@angular/router";
import { Page } from "ui/page";
import { TabView } from "ui/tab-view";
import { switchMap } from 'rxjs/operators';



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

  ngAfterViewInit() {}

}