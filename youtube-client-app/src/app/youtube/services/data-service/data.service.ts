import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { SearchItemInterface } from '../../models/search-item.model';
import { SearchResults } from '../../models/search-results.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  appData: SearchItemInterface[] = [];

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

  private getSerachParams(value: string) {
    let params = new HttpParams();
    params = params.append('part', 'snippet');
    params = params.append('maxResults', '25');
    params = params.append('q', `${value}`);
    return params;
  }
}