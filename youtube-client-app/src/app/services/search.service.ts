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

  searchData(value: string) {
    this.filteredData.next(this.data.filter((searchRes) => {
      const searchList = searchRes.snippet.title.toLowerCase();
      return searchList.includes(value.toLowerCase());
    })); 
  }
}
