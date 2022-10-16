import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SearchItemInterface } from 'src/app/youtube/models/search-item.model';
import { setBgColor  } from '../../../utils/updateColorFromDate';

@Component({
  selector: 'app-search-item',
  templateUrl: './search-item.component.html',
  styleUrls: ['./search-item.component.scss'],
})
export class SearchItemComponent implements OnInit {
  @Input() searchItem!: SearchItemInterface;

  color: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.color = setBgColor(this.searchItem.snippet.publishedAt, this.color);
  }

  getMoreInfo() {
    this.router.navigate(['/search-results', this.searchItem.id]);
  }
}
