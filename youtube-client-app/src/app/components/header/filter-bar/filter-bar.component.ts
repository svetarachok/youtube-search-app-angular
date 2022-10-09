import { Component } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.scss'],
})
export class FilterBarComponent {
  ascendingDate: boolean = false;

  ascendingViews: boolean = false;

  constructor(private sortService: SearchService) {

  }

  sortByDate() {
    this.ascendingDate = !this.ascendingDate;
    this.sortService.sortByDate(this.ascendingDate);
  }

  sortByViews() {
    this.ascendingViews = !this.ascendingViews;
    this.sortService.sortByViewCount(this.ascendingViews);
  }

  searchByInput(input: string) {
    this.sortService.searchByInput(input);
  }
}
