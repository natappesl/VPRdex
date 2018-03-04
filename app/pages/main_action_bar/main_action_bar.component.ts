import { Component, OnInit } from '@angular/core';
import { NavigationStart, NavigationEnd, ActivatedRoute } from "@angular/router";
import { RouterExtensions } from 'nativescript-angular/router';
import * as dialogs from "ui/dialogs";

@Component ({
  selector: 'MainActionBar',
  moduleId: module.id,
  templateUrl: './main_action_bar.component.html',
  styleUrls: ['./main_action_bar.component.css'],
})

export class MainActionBarComponent {
  constructor (private routerExtensions: RouterExtensions) {
  }

  toggleSearch(): void {
    dialogs.prompt({
      title: "Search",
      okButtonText: "Search",
      cancelButtonText: "Cancel",
      inputType: dialogs.inputType.text
  }).then(r => {
      if (r.result == true) {
        this.routerExtensions.navigate(['/search', r.text] );
      }

  });
  }
}