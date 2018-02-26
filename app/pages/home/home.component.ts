import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { SegmentedBar, SegmentedBarItem } from "ui/segmented-bar";

@Component ({
  selector: "home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})

export class HomeComponent {
  public currentdate: Date;
  public segmentedBarTabs: Array<SegmentedBarItem>;
  public currentTab: string = "Item 1";

  constructor() {
      this.segmentedBarTabs = [];
      for (let i = 1; i < 5; i++) {
          const item = new SegmentedBarItem();
          item.title = "Tab " + i;
          this.segmentedBarTabs.push(item);
      }
  }

  public onSelectedIndexChange(args) {
      let segmetedBar = <SegmentedBar>args.object;
      this.currentTab = "Item " + (segmetedBar.selectedIndex + 1);
  }
}