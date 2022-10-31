import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { SearchService } from 'src/app/youtube/services/search-service/search.service';
import { SearchState } from '../../store/youtube-search-reducer';

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

  constructor(private searchService: SearchService, private store: Store<SearchState>) {}

}
