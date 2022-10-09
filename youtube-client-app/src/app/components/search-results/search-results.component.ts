import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {

  public get searchStarted() {
    return this.searchService.startedSearch;
  } 

  public get filteredResults() {
    return this.searchService.filteredData.value;
  }

  constructor(private searchService: SearchService) {

  }

}
