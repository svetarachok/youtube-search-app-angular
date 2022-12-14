import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from 'src/app/youtube/services/search-service/search.service';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent implements OnInit {
  public searchData$ = new Subject<string>();

  constructor(private searchService: SearchService) {
  }

  ngOnInit() {
    this.searchData$
      .pipe(
        filter(text => text.length >= 3),
        debounceTime(300),
        distinctUntilChanged(),
      )
      .subscribe((data) => {
        this.searchService.searchData(data);
      });
  }

  onKeyupAtSearch(e:Event) {
    this.searchService.startedSearch = true;
    this.searchData$.next((e.target as HTMLInputElement).value);
  }
}
