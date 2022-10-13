import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

import { SearchItemComponent } from './pages/main/search-item/search-item.component';
import { SearchResultsComponent } from './pages/main/search-results.component';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
    DetailedInformationComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([
      { path: '', component: SearchResultsComponent },
    ]),
  ],
  exports: [
    SearchResultsComponent,
  ],
})
export class YoutubeModule {}