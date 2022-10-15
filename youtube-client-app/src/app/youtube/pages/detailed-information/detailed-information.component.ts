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

  constructor(
    private route: ActivatedRoute, 
    private dataService: DataService,
    private location: Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.dataItem = this.dataService.getDataItem(id) as SearchItemInterface;
    this.route.params.subscribe(params => this.dataItem = <SearchItemInterface> this.dataService.getDataItem(params['id']));
  }

  onBackClicked() {
    this.location.back();
  }
}
