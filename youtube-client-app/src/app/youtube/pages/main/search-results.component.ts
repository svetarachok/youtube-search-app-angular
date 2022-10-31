import { Component } from '@angular/core';
import { SearchService } from 'src/app/youtube/services/search-service/search.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {

  public get isSearchStarted() {
    return this.searchService.startedSearch;
  }

  public get searchedVideos() {
    return this.searchService.filteredData.value;
  }

  constructor(private searchService: SearchService) {}

}
