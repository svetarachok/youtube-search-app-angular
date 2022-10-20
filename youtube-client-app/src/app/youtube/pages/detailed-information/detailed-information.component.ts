import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  descriptionNotHidden: boolean = false;

  color: string = '';

  constructor(
    private route: ActivatedRoute, 
    private searchService: SearchService,
    private location: Location) { }

  ngOnInit(): void {
    
    const id = this.route.snapshot.params['id'];
    this.dataItem = this.searchService.getSearchItem(id) as SearchItemInterface;
    this.route.params.subscribe(params => this.dataItem = <SearchItemInterface> this.searchService.getSearchItem(params['id']));
    
    this.visibleDescription = this.dataItem.snippet.description.slice( 0, 240); 
    this.hiddenDescription = this.dataItem.snippet.description.slice(241);
    this.color = setBgColor(this.dataItem.snippet.publishedAt, this.color);
  }

  onBackClicked() {
    this.location.back();
  }

  toggleDescription() {
    this.descriptionNotHidden = !this.descriptionNotHidden;
  }
}
