import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SpeciesModel } from "../../models/species.model";
import { Observable, fromObject, fromObjectRecursive, PropertyChangeData, EventData, WrappedValue } from "tns-core-modules/data/observable";

@Component({
	selector: 'SearchItem',
	moduleId: module.id,
	templateUrl: './search.item.component.html',
	styleUrls: ['./search.item.component.css']
})

export class SearchItemComponent extends Observable implements OnInit {
	@Input() data: SpeciesModel;

	constructor() {
		super();
	}

	ngOnInit() { }

	onTap(event) {
		console.log(this.data.name);
	}
}