import { Component, OnInit, Input } from '@angular/core';
import { SpeciesModel } from "../../models/species.model";
import { Page } from "tns-core-modules/ui/page";
import { PageRoute } from "nativescript-angular/router";
@Component({
	selector: 'species-detail',
	moduleId: module.id,
	templateUrl: './species.detail.component.html',
	styleUrls: ['./species.detail.component.css']
})

export class SpeciesDetailComponent implements OnInit {
	private _speciesModel: SpeciesModel;

	constructor(private _page: Page, private _pageRoute: PageRoute) {
		this._pageRoute.activatedRoute
			.switchMap(activatedRoute => activatedRoute.queryParams)
			.forEach((params) => {
				this._speciesModel = params;
			});
	}

	ngOnInit() { }
}