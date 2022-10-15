import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchItemInterface } from '../../models/search-item.model';
import { DataService } from '../../services/data-service/data.service';
import { Location } from '@angular/common';

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

  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService,
    private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dataItem = this.dataService.getDataItem(id) as SearchItemInterface;
    this.route.params.subscribe(params => this.dataItem = <SearchItemInterface> this.dataService.getDataItem(params['id']));

    this.visibleDescription = this.dataItem.snippet.description.slice( 0, 240); 
    this.hiddenDescription = this.dataItem.snippet.description.slice(241);
  }

  onBackClicked() {
    this.location.back();
  }

  toggleDescription() {
    this.descriptionNotHidden = !this.descriptionNotHidden;
  }
}
