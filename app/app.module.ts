import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";
import { SearchService } from "./services/search.service";

import * as dockModule from "tns-core-modules/ui/layouts/dock-layout";
import * as buttonModule from "tns-core-modules/ui/button";
import * as tabViewModule from "tns-core-modules/ui/tab-view";
import * as searchBarModule from "tns-core-modules/ui/search-bar";
import * as segmentedBarModule from "tns-core-modules/ui/segmented-bar";
import * as Constants from './constants';
import { registerElement } from "nativescript-angular/element-registry";
import { routes, navigatableComponents } from "./app.routing";
import { Observable } from "rxjs/Observable";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/map";
import 'rxjs/add/observable/of';

declare var GMSServices: any;

import { NativeScriptFormsModule } from "nativescript-angular/forms";
//import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptFormsModule,
        NativeScriptRouterModule.forRoot(routes),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents
    ],
    providers: [SearchService],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }