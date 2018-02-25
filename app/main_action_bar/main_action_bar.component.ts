import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtensions } from 'nativescript-angular/router';
import { Page, NavigatedData } from 'tns-core-modules/ui/page';
import { topmost, NavigationEntry } from 'tns-core-modules/ui/frame';
import * as dialogs from "ui/dialogs";

@Component ({
  selector: 'MainActionBar',
  templateUrl: 'main_action_bar/main_action_bar.component.html',
  styleUrls: ['main_action_bar/main_action_bar.component.css']
})

export class MainActionBarComponent {
  showSearch: boolean = false;

  constructor (private router: Router, private routerExtensions: RouterExtensions) {
  }
  
  toggleSearch(): void {
    dialogs.prompt({
      title: "Search",
      okButtonText: "Search",
      cancelButtonText: "Cancel",
      inputType: dialogs.inputType.text
  }).then(r => {
      console.log("Dialog result: " + r.result + ", text: " + r.text);
      if (r.result == true) {
        this.router.navigate(['/catalog/' + r.text]);
      }
  });
  }
  clearSearch(): void {
    this.toggleSearch();
  }
  submitSearch(): void {
    this.toggleSearch();
  }
  
}