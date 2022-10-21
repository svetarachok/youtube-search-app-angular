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
        this.idsArray = data;
        const dataIds = this.idsArray.join(',');
        let params = this.getVideoParams(dataIds);
        this.http.get<SearchResults>(
          '/videos',
          {
            params: params,
          })
          .pipe(
            map( videos => videos.items),
          ).subscribe( items => {        
            this.filteredData.next(items.filter((searchRes) => {
              const searchTitle = searchRes.snippet.title.toLowerCase();
              // console.log('Что ищем: ' + value);
              // console.log('Где ищем: ' + searchTitle);
              return searchTitle.includes(value.toLowerCase());
            }));
            this.sortedData = this.filteredData.value;
          });
      });
  }

  getSearchItem(id: string) {
    const dataItem = this.filteredData.value.find((item: SearchItemInterface) => {
      return item.id === id;
    });
    return dataItem;
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
    return params;
  }

}
 