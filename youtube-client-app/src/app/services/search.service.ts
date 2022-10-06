import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import data from '../models/data.json';
import { SearchItemInterface } from '../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class SearchService {

  data: SearchItemInterface[] = data.items;

  filteredData: BehaviorSubject<SearchItemInterface[]> = new BehaviorSubject(this.data);

  sortedData: SearchItemInterface[] = [];

  searchData(value: string) {
    this.filteredData.next(this.data.filter((searchRes) => {
      const searchList = searchRes.snippet.title.toLowerCase();
      return searchList.includes(value.toLowerCase());
    })); 
  }

  sortByDate(ascending: boolean) {
    console.log(ascending);
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
    if (input !== '') {
      this.sortedData = this.filteredData.value;
      this.sortedData.filter((searchRes) => {
        const searchList = searchRes.snippet.title.toLowerCase();
        console.log(searchList.includes(input.toLowerCase()));
        return searchList.includes(input.toLowerCase());
      });
      console.log(this.sortedData);
      this.filteredData.next(this.sortedData);
    } else {
      this.filteredData.next(this.filteredData.value);
    }
  }
}
