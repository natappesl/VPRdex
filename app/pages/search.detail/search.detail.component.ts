import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { RouterExtensions } from 'nativescript-angular/router';
import { SpeciesModel } from "../../models/species.model";

@Component({
	selector: 'search-detail',
	moduleId: module.id,
	templateUrl: './search.detail.component.html',
	styleUrls: ['./search.detail.component.css']
})

export class SearchDetailComponent implements OnInit {
	@Input() speciesModel: SpeciesModel;

	constructor(private _routerExtensions: RouterExtensions) {}
	ngOnInit() {}

	onTap($event) {
		console.log(this.speciesModel.name);
		this._routerExtensions.navigate(["/species"], {
			queryParams: this.speciesModel,
			transition: {
				name: "slideTop",
				duration: 200,
				curve: "easeIn"
	} })
	}
}