import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component ({
  selector: "home",
  templateUrl: "home/home.component.html",
  styleUrls: ["home/home.component.css"]
})

export class HomeComponent {
  public currentdate: Date;

  constructor() {
  }

  ngOnInit() {
  }
}