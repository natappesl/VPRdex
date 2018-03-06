import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Page, ShownModallyData, NavigatedData } from "tns-core-modules/ui/page";
import { NavigationStart, NavigationEnd, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';
import { TextField } from "ui/text-field";
import * as dialogs from "ui/dialogs";

@Component ({
  selector: 'MainActionBar',
  moduleId: module.id,
  templateUrl: './main_action_bar.component.html',
  styleUrls: ['./main_action_bar.component.css'],
})

export class MainActionBarComponent {
  public showSearch: boolean = false;

  @ViewChild('searchBar') searchBar: TextField;

  constructor(private routerExtensions: RouterExtensions) {
  }

  ngOnInit() {
    this.showSearch = false;
  }

  ngAfterViewInit() {
  }

  toggleSearch(event): void {
  //   dialogs.prompt({
  //     title: "Search",
  //     okButtonText: "Search",
  //     cancelButtonText: "Cancel",
  //     inputType: dialogs.inputType.text
  // }).then(r => {
  //     if (r.result == true) {
  //       this.routerExtensions.navigate(['/search', r.text] );
  //     }
  // });
    this.showSearch = !this.showSearch;
    if (!this.showSearch) {
      console.log(event)
    }
    this.searchBar.text = '';
  }

  clearSearch(event) {
    // let searchField = <TextField>event.object;
    // searchField.text = '';

    this.searchBar.text = '';
  }
}