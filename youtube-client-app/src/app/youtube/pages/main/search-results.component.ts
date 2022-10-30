import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { SearchService } from 'src/app/youtube/services/search-service/search.service';
import { SearchItemInterface } from '../../models/search-item.model';
import { getSearchResults } from '../../store';
import { SearchState } from '../../store/youtube-search-reducer';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {

  public get isSearchStarted() {
    return this.searchService.startedSearch;
  }

  // public get filteredResults() {
  //   return this.searchService.filteredData.value;
  // }

  searchedVideos!: Observable<SearchItemInterface[]>;

  constructor(private searchService: SearchService, private store: Store<SearchState>) {}

  ngOnInit(): void {
    this.searchedVideos = this.store.select(getSearchResults);
  }

}
