import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";

@Injectable ()
export class SearchService {
    query: string;

    constructor() {}

    search (q: string) {
        this.query = q;
        console.log (this.query);
    }
}