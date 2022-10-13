import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';

import { SearchItemComponent } from './pages/main/search-item/search-item.component';
import { SearchResultsComponent } from './pages/main/search-results.component';

@NgModule({
  declarations: [
    SearchResultsComponent,
    SearchItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
  exports: [
    SearchResultsComponent,
  ],
})
export class YoutubeModule {}