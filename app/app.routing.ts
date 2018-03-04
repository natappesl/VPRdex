import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { AboutComponent } from "./pages/about/about.component";
import { MainActionBarComponent } from "./pages/main_action_bar/main_action_bar.component";
import { SearchPageComponent } from "./pages/search.page/search.page.component";
import { SearchItemComponent } from "./pages/search.item/search.item.component";

export const routes: Routes = [
    { path: "", redirectTo: "/home/(aboutoutlet:about//catalogoutlet:catalog)", pathMatch: "full" },
    { path: "home", component: HomeComponent, children: [
        { path: "about", component: AboutComponent, outlet: "aboutoutlet" },
        { path: "catalog", component: CatalogComponent, outlet: "catalogoutlet" },
    ] },
    { path: "search", component: SearchPageComponent },
    { path: "search/:query", component: SearchPageComponent },
];

export const navigatableComponents = [
  HomeComponent,
  AboutComponent,
  CatalogComponent,
  MainActionBarComponent,
  SearchPageComponent,
  SearchItemComponent
];
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }