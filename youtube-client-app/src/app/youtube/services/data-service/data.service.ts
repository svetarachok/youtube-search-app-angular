import { Injectable } from '@angular/core';
import data from '../../models/data.json';
import { SearchItemInterface } from '../../models/search-item.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {

  appData: SearchItemInterface[] = [];

  getData() {
    return this.appData = data.items;
  }

  getDataItem(id: string) {
    const dataItem = this.appData.find((item: SearchItemInterface) => {
      return item.id === id;
    });
    return dataItem;
  }
}