import { Component, OnInit, Input } from '@angular/core';
import { SpeciesModel } from "../../models/species.model";
import { Page } from "tns-core-modules/ui/page";
import { PageRoute, RouterExtensions } from "nativescript-angular/router";

@Component({
	selector: 'species-detail',
	moduleId: module.id,
	templateUrl: './species.detail.component.html',
	styleUrls: ['./species.detail.component.css']
})

export class SpeciesDetailComponent implements OnInit {
	private _speciesModel: SpeciesModel;
	private _formattedTitle: string;

	constructor(private _page: Page, private _pageRoute: PageRoute, private _routerExtensions: RouterExtensions) {
		this._pageRoute.activatedRoute
			.switchMap(activatedRoute => activatedRoute.queryParams)
			.forEach((params) => {
				this._speciesModel = params;
			});
		let splitIndex = this._speciesModel.name.indexOf(",");
		if (splitIndex != -1) this._formattedTitle = this._speciesModel.name.substr(0, splitIndex);
		else this._formattedTitle = this._speciesModel.name;

		this._page.actionBarHidden = true;
	}

	ngOnInit() {

	}
}