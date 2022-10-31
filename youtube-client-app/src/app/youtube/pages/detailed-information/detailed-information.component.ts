import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchItemInterface } from '../../models/search-item.model';
import { Location } from '@angular/common';
import { setBgColor } from '../../utils/updateColorFromDate';
import { SearchService } from '../../services/search-service/search.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-detailed-information',
  templateUrl: './detailed-information.component.html',
  styleUrls: ['./detailed-information.component.scss'],
})
export class DetailedInformationComponent implements OnInit, OnDestroy {
  videoItem!: SearchItemInterface;

  visibleDescription: string = '';

  hiddenDescription: string = '';

  isDescriptionHidden: boolean = false;

  color: string = '';

  itemId: string = '';

  dislikesCount: number = 0;

  subsctribed!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private searchService: SearchService,
    private location: Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => this.itemId = params['id']);
    this.subsctribed = this.searchService.getSearchItem(this.itemId).subscribe((video: SearchItemInterface) => {
      this.videoItem = video;
      if (!this.videoItem) {
        this.router.navigate(['/page-not-found']);
      }
      if (this.videoItem) {
        this.visibleDescription = this.videoItem.snippet.description.slice( 0, 240); 
        this.hiddenDescription = this.videoItem.snippet.description.slice(241);
        this.color = setBgColor(this.videoItem.snippet.publishedAt);
        this.dislikesCount = Math.round(+this.videoItem.statistics.likeCount * Math.random() / 100);
      }
    });
  }

  onBackClicked() {
    this.location.back();
  }

  toggleDescription() {
    this.isDescriptionHidden = !this.isDescriptionHidden;
  }

  ngOnDestroy() {
    this.subsctribed.unsubscribe();
  }
}
