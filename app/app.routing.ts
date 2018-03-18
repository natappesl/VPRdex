import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { HomeComponent } from "./pages/home/home.component";
import { CatalogComponent } from "./pages/catalog/catalog.component";
import { AboutComponent } from "./pages/about/about.component";
import { MainActionBarComponent } from "./pages/main_action_bar/main_action_bar.component";
import { SearchPageComponent } from "./pages/search.page/search.page.component";
import { SearchDetailComponent } from "./pages/search.detail/search.detail.component";
import { SpeciesDetailComponent } from "./pages/species.detail/species.detail.component";

export const routes: Routes = [
    { path: "", redirectTo: "/home/(aboutoutlet:about//catalogoutlet:catalog)", pathMatch: "full" },
    {
        path: "home", component: HomeComponent, children: [
            { path: "about", component: AboutComponent, outlet: "aboutoutlet" },
            { path: "catalog", component: CatalogComponent, outlet: "catalogoutlet" },
        ]
    },
    { path: "search", component: SearchPageComponent },
    { path: "search/:query", component: SearchPageComponent },
    { path: "species", component: SpeciesDetailComponent },
];

export const navigatableComponents = [
    HomeComponent,
    AboutComponent,
    CatalogComponent,
    MainActionBarComponent,
    SearchPageComponent,
    SearchDetailComponent,
    SpeciesDetailComponent,
];
@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes, { enableTracing: true })],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }