import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
	selector: 'SearchItem',
	moduleId: module.id,
	templateUrl: './search.item.component.html',
	styleUrls: ['./search.item.component.css']
})

export class SearchItemComponent implements OnInit {
	@Input() data: any;

	constructor() { }

	ngOnInit() { }
}