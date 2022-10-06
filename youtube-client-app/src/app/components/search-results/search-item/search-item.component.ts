import { Component, Input, OnInit } from '@angular/core';
import { SearchItemInterface } from 'src/app/models/search-item.model';
import { DateMarks, nowInSeconds } from '../../../utils/dateMarks';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() searchItem!: SearchItemInterface;

  color: string = '';

  // eslint-disable-next-line @typescript-eslint/no-useless-constructor, @typescript-eslint/no-empty-function
  constructor() {
    
  }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit(): void {
    this.color = this.setBgColor();
  }

  setBgColor(): string {
    const postData = new Date(this.searchItem.snippet.publishedAt);
    console.log(postData);
    if (postData <= new Date(nowInSeconds) && postData > new Date(DateMarks.upTo7)) {
      this.color = 'blue';
    } 
    
    if (postData <= new Date(DateMarks.upTo7) && postData > new Date(DateMarks.upToMonth)) {
      this.color = 'green';
    } 
    
    if (postData <= new Date(DateMarks.upToMonth) && postData > new Date(DateMarks.upTo6Month)) {
      this.color = 'yellow';
    } 
    
    if (postData <= new Date(DateMarks.upTo6Month)) {
      this.color = 'red';
    }

    return this.color;
  }

}
