import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component ({
  selector: "about",
  moduleId: module.id,
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})

export class AboutComponent {
  constructor (private router: Router){

  }
}