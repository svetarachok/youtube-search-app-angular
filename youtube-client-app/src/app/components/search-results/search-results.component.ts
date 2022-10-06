import { Component, Input, OnChanges } from '@angular/core';
import { SearchItemInterface } from 'src/app/models/search-item.model';
import { SearchPipe } from 'src/app/pipes/search-pipe/search-pipe.pipe';
import data from '../../models/data.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent implements OnChanges {

  public searchResults: SearchItemInterface[] = data.items;

  public filteredResults: SearchItemInterface[] = this.searchResults;
 
  @Input() searchDataRecieved: string = '';

  constructor(private search: SearchPipe) {

  }

  ngOnChanges() {
    console.log('Что ищем: ', this.searchDataRecieved);
    this.updateSearchResults();
    console.log(this.filteredResults);
  }

  updateSearchResults() {
    this.filteredResults = this.search.transform(this.searchResults, this.searchDataRecieved);
  }

}
