import { Component } from '@angular/core';
import { SearchService } from 'src/app/youtube/services/search-service/search.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  ascendingDate: boolean = false;

  ascendingViews: boolean = false;

  constructor(private searchService: SearchService) {

  }

  sortByDate(): void {
    this.ascendingDate = !this.ascendingDate;
    this.searchService.sortByDate(this.ascendingDate);
  }

  sortByViews(): void {
    this.ascendingViews = !this.ascendingViews;
    this.searchService.sortByViewCount(this.ascendingViews);
  }

  searchByInput(input: string): void {
    this.searchService.searchByInput(input);
  }
}
