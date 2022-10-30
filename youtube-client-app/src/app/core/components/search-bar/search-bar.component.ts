import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from 'src/app/youtube/services/search-service/search.service';
import { SearchState } from 'src/app/youtube/store/youtube-search-reducer';

import { Store } from '@ngrx/store';
import * as YoutubeSearchActions from '../../../youtube/store/youtube-search.actions';
@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public searchData$ = new Subject<string>();

  constructor(private searchService: SearchService, private router: Router, private store: Store<SearchState>) {
  }

  ngOnInit() {
    this.searchData$
      .pipe(
        filter(text => text.length >= 3),
        debounceTime(300),
        distinctUntilChanged(),
      )
      .subscribe((data) => {
        // YoutubeSearchActions.clearStore();
        this.store.dispatch(YoutubeSearchActions.getSearchRequest({ searchRequest: data }));
      });
  }

  onKeyupAtSearch(e:Event) {
    this.searchService.startedSearch = true;
    if (this.router.url !== '/search-results') {
      this.router.navigate(['/search-results']);
    }
    this.searchData$.next((e.target as HTMLInputElement).value);
  }
}
