import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import * as buttonModule from "tns-core-modules/ui/button";
import * as tabViewModule from "tns-core-modules/ui/tab-view";
import * as searchBarModule from "tns-core-modules/ui/search-bar";
import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";

import { routes, navigatableComponents } from "./app.routing";



// Uncomment and add to NgModule imports if you need to use two-way binding
import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports  if you need to use the HTTP wrapper
import { NativeScriptHttpModule } from "nativescript-angular/http";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(routes),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        ...navigatableComponents
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }