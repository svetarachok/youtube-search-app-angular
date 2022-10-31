import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { SearchItemInterface } from '../../models/search-item.model';
import { SearchResults } from '../../models/search-results.model';
import { getSearchResults } from '../../store';
import { SearchState } from '../../store/youtube-search-reducer';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  data!: SearchItemInterface[];

  filteredData: BehaviorSubject<SearchItemInterface[]> = new BehaviorSubject(this.data);

  sortedData: SearchItemInterface[] = [];

  startedSearch = false;

  idsArray: string[] = [];

  constructor(private http: HttpClient, private store: Store<SearchState>) {
    this.store.select(getSearchResults).subscribe( items => {   
      this.filteredData.next([...items]);
      this.sortedData = this.filteredData.value;
    });
  }

  getDataFromSearchList(value: string): Observable<SearchResults> {
    this.idsArray = [];
    let params = this.getSerachParams(value);
    return this.http.get<SearchResults>('/search', {
      params: params,
    })
      .pipe(
        map(data => {
          for (const key of data.items) {
            if ( typeof key.id === 'object') {
              this.idsArray.push(key.id.videoId);
            }
          }
        }),
        switchMap(() => {
          const dataIds = this.idsArray.join(',');
          let params2 = this.getVideoParams(dataIds);
          return this.http.get<SearchResults>(
            '/videos',
            {
              params: params2,
            });
        }),
      );
  }

  getSearchItem(id: string): Observable<SearchItemInterface> {
    let params = new HttpParams();
    params = params.append('part', 'snippet, statistics');
    params = params.append('id', `${id}`);
    return this.http.get<SearchResults>('/videos', {
      params: params,
    })
      .pipe(
        map(data => data.items[0]),
      );
  }

  updateSearch() {
    this.filteredData = new BehaviorSubject(this.data);
  }

  sortByDate(ascending: boolean): void {
    if (ascending) {
      this.filteredData.value.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
    } else {
      this.filteredData.value.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
    }
  }

  sortByViewCount(ascending: boolean): void {
    if (ascending) {
      this.filteredData.value.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
    } else {
      this.filteredData.value.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
    }
  }
  
  searchByInput(input: string): void {
    this.filteredData.next(this.sortedData.filter((searchRes) => {
      const searchList = searchRes.snippet.title.toLowerCase();
      return searchList.includes(input.toLowerCase());
    }));
  }

  private getSerachParams(value: string) {
    let params = new HttpParams();
    params = params.append('maxResults', '25');
    params = params.append('q', `${value}`);
    return params;
  }

  private getVideoParams(videoIds: string) {
    let params = new HttpParams();
    params = params.append('part', 'snippet, statistics');
    params = params.append('id', `${videoIds}`);
    return params;
  }

}
 