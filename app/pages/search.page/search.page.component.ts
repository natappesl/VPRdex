import { Component, OnInit } from '@angular/core';
import { SearchService, SearchResult } from "../../services/search.service";
import { Page } from "tns-core-modules/ui/page";

@Component({
	selector: 'searchPage',
	moduleId: module.id,
	templateUrl: './search.page.component.html',
	styleUrls: ['./search.page.component.css'],
	providers: [SearchService],
})

export class SearchPageComponent implements OnInit {
	query: string;
	searchResults: Array<SearchResult>;

	constructor(private searchService: SearchService, private page: Page) { }

	ngOnInit() {
	}
}