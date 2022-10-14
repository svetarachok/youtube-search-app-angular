import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItemInterface } from 'src/app/youtube/models/search-item.model';
import { DateMarks, nowInSeconds } from '../../../utils/dateMarks';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() searchItem!: SearchItemInterface;

  color: string = '';

  constructor(private router: Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.color = this.setBgColor();
  }

  setBgColor(): string {
    const postData = new Date(this.searchItem.snippet.publishedAt);
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

  getMoreInfo() {
    this.router.navigate(['/search-results', this.searchItem.id]);
  }
}
