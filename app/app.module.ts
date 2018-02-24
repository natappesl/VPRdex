import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import * as buttonModule from "tns-core-modules/ui/button";
import * as tabViewModule from "tns-core-modules/ui/tab-view";
import * as searchBarModule from "tns-core-modules/ui/search-bar";
import { ModalDialogService } from "nativescript-angular/modal-dialog";
import { registerElement } from "nativescript-angular/element-registry";
import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";

import { routes, navigatableComponents } from "./app.routing";
import { isIOS } from "platform";

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
    providers: [
        ModalDialogService
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})

export class AppModule { }