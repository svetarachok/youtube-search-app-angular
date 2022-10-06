import { Component } from '@angular/core';
// import { BehaviorSubject } from 'rxjs';
import { SearchItemInterface } from 'src/app/models/search-item.model';
import { SearchPipe } from 'src/app/pipes/search-pipe/search-pipe.pipe';
import { SearchService } from 'src/app/services/search.service';
import data from '../../models/data.json';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss'],
})
export class SearchResultsComponent {

  public searchResults: SearchItemInterface[] = data.items;

  public get filteredResults() {
    return this.searchService.filteredData.value;
  }

  constructor(private search: SearchPipe, private searchService: SearchService) {

  }

}
