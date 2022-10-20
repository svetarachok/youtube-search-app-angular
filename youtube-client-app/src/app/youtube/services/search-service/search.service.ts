import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { SearchItemInterface } from '../../models/search-item.model';
import { SearchResults } from '../../models/search-results.model';
import { DataService } from '../data-service/data.service';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  data!: SearchItemInterface[];

  filteredData: BehaviorSubject<SearchItemInterface[]> = new BehaviorSubject(this.data);

  sortedData: SearchItemInterface[] = [];

  startedSearch = false;

  idsArray: string[] = [];

  constructor(private dataService: DataService, private http: HttpClient) {}
  
  searchData(value: string) {
    this.dataService.getDataFromSearchList(value)
      .subscribe( data => {
        console.log(data);
        this.idsArray = data;
        const dataIds = this.idsArray.join(',');
        let params = this.getVideoParams(dataIds);
        this.http.get<SearchResults>(
          'https://youtube.googleapis.com/youtube/v3/videos',
          {
            params: params,
          })
          .pipe(
            map( videos => videos.items),
          ).subscribe( items => {        
            this.filteredData.next(items.filter((searchRes) => {
              const searchList = searchRes.snippet.title.toLowerCase();
              return searchList.includes(value.toLowerCase());
            }));
            this.sortedData = this.filteredData.value;
          });
      });
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

  private getVideoParams(videoIds: string) {
    let params = new HttpParams();
    params = params.append('part', 'snippet, statistics');
    params = params.append('id', `${videoIds}`);
    params = params.append('key', 'AIzaSyBgD4Fb2rwBcy1O-tkZi6cQb-bIwnRX7Zw');
    return params;
  }

}
 