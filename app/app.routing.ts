import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CatalogComponent } from "./catalog/catalog.component";
import { MainActionBarComponent } from "./main_action_bar/main_action_bar.component";

export const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "home", component: HomeComponent },
    { path: "catalog", component: CatalogComponent },
    { path: "catalog/:searchText", component: CatalogComponent },
];

export const navigatableComponents = [
  HomeComponent,
  CatalogComponent,
  MainActionBarComponent
];
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }