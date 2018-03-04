import { Component, OnInit } from '@angular/core';
import { SearchService } from "../../services/search.service";

@Component({
	selector: 'search',
	moduleId: module.id,
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css']
})

export class SearchPageComponent implements OnInit {

	constructor(private searchService: SearchService) { }

	ngOnInit() {
		this.searchService.showAll();
	}
}