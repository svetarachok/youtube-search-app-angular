import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {

  @Output() search = new EventEmitter<string>();

  public searchData = '';

  onSearch() {
    this.search.emit(this.searchData);
    console.log('In serachBar: ', this.searchData);
  }
}
