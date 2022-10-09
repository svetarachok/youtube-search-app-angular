import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {

  public searchData = '';

  constructor(private searchService: SearchService) {
  }
  
  onSearch() {
    this.searchService.startedSearch = true;
    this.searchService.searchData(this.searchData);
  }
  
  onKeyupAtSearch(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.onSearch();
    }
    if (!this.searchData) {
      this.searchService.updateSearch();
    }
  }

}
