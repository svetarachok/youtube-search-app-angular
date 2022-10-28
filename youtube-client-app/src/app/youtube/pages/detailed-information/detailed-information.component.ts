import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItemInterface } from '../../models/search-item.model';
import { Location } from '@angular/common';
import { setBgColor } from '../../utils/updateColorFromDate';
import { SearchService } from '../../services/search-service/search.service';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent implements OnInit {
  dataItem!: SearchItemInterface;

  visibleDescription: string = '';

  hiddenDescription: string = '';

  isDescriptionHidden: boolean = false;

  color: string = '';

  itemId: string = '';

  dislikesCount: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.itemId = params['id']);
    this.searchService.getSearchItem(this.itemId).subscribe(data => {
      this.dataItem = data;
      if (!this.dataItem) {
        this.router.navigate(['/page-not-found']);
      }
      if (this.dataItem) {
        this.visibleDescription = this.dataItem.snippet.description.slice( 0, 240); 
        this.hiddenDescription = this.dataItem.snippet.description.slice(241);
        this.color = setBgColor(this.dataItem.snippet.publishedAt);
        this.dislikesCount = Math.round(+this.dataItem.statistics.likeCount * Math.random() / 100);
      }
    });
  }

  get imageUrl() {
    return this.dataItem.snippet.thumbnails.maxres ? this.dataItem.snippet.thumbnails.maxres.url : this.dataItem.snippet.thumbnails.standard.url;
  }

  onBackClicked() {
    this.location.back();
  }

  toggleDescription() {
    this.isDescriptionHidden = !this.isDescriptionHidden;
  }
}
