import { Component, OnInit } from '@angular/core';
import { SearchService } from "../../services/search.service";

@Component({
	selector: 'searchPage',
	moduleId: module.id,
	templateUrl: './search.page.component.html',
	styleUrls: ['./search.page.component.css'],
	providers: [SearchService],
})

export class SearchPageComponent implements OnInit {

	constructor(private searchService: SearchService) { }

	ngOnInit() {
		this.searchService.search();
	}
}