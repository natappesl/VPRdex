import { Component, OnInit } from '@angular/core';
import { SearchService } from "../../services/search.service";
import { SpeciesModel } from "../../models/species.model";
import { Page } from "tns-core-modules/ui/page";
import { PageRoute } from "nativescript-angular/router";
import { Route } from '@angular/router';
import "rxjs/add/operator/switchMap";

@Component({
	selector: 'searchPage',
	moduleId: module.id,
	templateUrl: './search.page.component.html',
	styleUrls: [
		'./search.page.component.css',
		'../main_action_bar/main_action_bar.component.css'],
})

export class SearchPageComponent implements OnInit {
	private _query: string;
	private _searchResults: SpeciesModel[];
	
	constructor(private _searchService: SearchService, private _page: Page, private _pageRoute: PageRoute) {
		this._pageRoute.activatedRoute
			.switchMap(activatedRoute => activatedRoute.queryParams)
			.forEach((params) => {
				this._query = params["query"];
			});

		this._searchService.search(this._query);
	}

	ngOnInit() {
	}
}