import { Component, Input, OnInit } from '@angular/core';
import { SearchItemInterface } from 'src/app/models/search-item.model';
import data from '../../models/data.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {

  public searchResults: SearchItemInterface[] = data.items;

  public filteredResults = this.searchResults;

  @Input() searchDataPassed = '';

  constructor() {
    console.log(this.searchDataPassed);
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

  // onSearch(searchData: string) {
  //   this.filteredResults = this.searchPipe.transform(this.searchResults, searchData);
  // }


}
