import { Component, OnInit } from '@angular/core';
import { SearchItemInterface } from 'src/app/models/search-item.model';
import data from '../../models/data.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnInit {

  public searchResults: SearchItemInterface[] = data.items;

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/no-empty-function
  constructor() {
    console.log(data);
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
  }

}
