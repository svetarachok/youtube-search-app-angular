import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/youtube/services/data-service/data.service';
import { SearchService } from 'src/app/youtube/services/search-service/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {

  public searchData = '';

  constructor(private searchService: SearchService, private router: Router, private dataService: DataService) {
  }
  
  onSearch() {
    this.router.navigate(['/search-results']);
    this.searchService.startedSearch = true;
    // this.searchService.getData(this.searchData);
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
