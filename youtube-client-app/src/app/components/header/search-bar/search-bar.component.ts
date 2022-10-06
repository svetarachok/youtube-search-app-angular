import { Component, EventEmitter, Output } from '@angular/core';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  // providers: [SearchService],
})
export class SearchBarComponent {

  @Output() search = new EventEmitter<string>();

  public searchData = '';

  constructor(private searchService: SearchService) {
  }

  onSearch() {
    this.search.emit(this.searchData);
    this.searchService.searchData(this.searchData);
  }

}
