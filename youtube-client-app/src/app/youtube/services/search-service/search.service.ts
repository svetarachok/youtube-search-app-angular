import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchItemInterface } from '../../models/search-item.model';
import { SearchResults } from '../../models/search-results.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  data!: SearchItemInterface[];

  filteredData: BehaviorSubject<SearchItemInterface[]> = new BehaviorSubject(this.data);

  sortedData: SearchItemInterface[] = [];

  startedSearch = false;

  idsArray: string[] = [];

  constructor(private http: HttpClient) {}

  getDataFromSearchList(value: string) {
    let params = this.getSerachParams(value);
    return this.http.get<SearchResults>('/search', {
      params: params,
    })
      .pipe(
        map(data => {
          const arr = [];
          for (const key of data.items) {
            if ( typeof key.id === 'object') {
              arr.push(key.id.videoId);
            }
          }
          return arr;
        }),
      );
  }
  
  searchData(value: string) {
    this.getDataFromSearchList(value)
      .subscribe( data => {
        this.idsArray = data;
        const dataIds = this.idsArray.join(',');
        let params = this.getVideoParams(dataIds);
        this.http.get<SearchResults>(
          '/videos',
          {
            params: params,
          })
          .pipe(
            map( videos => {
              return videos.items;
            }),
          ).subscribe( items => {        
            this.filteredData.next(items);
            this.sortedData = this.filteredData.value;
          });
      });
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

  sortByDate(ascending: boolean) {
    if (ascending) {
      this.filteredData.value.sort((a, b) => Date.parse(a.snippet.publishedAt) - Date.parse(b.snippet.publishedAt));
    } else {
      this.filteredData.value.sort((a, b) => Date.parse(b.snippet.publishedAt) - Date.parse(a.snippet.publishedAt));
    }
  }

  sortByViewCount(ascending: boolean) {
    if (ascending) {
      this.filteredData.value.sort((a, b) => Number(a.statistics.viewCount) - Number(b.statistics.viewCount));
    } else {
      this.filteredData.value.sort((a, b) => Number(b.statistics.viewCount) - Number(a.statistics.viewCount));
    }
  }
  
  searchByInput(input: string) {
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
 