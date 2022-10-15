import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

import { SearchItemComponent } from './pages/main/search-item/search-item.component';
import { SearchResultsComponent } from './pages/main/search-results.component';
import { DetailedInformationComponent } from './pages/detailed-information/detailed-information.component';
import { AuthGuardService } from '../auth/services/auth-guard/auth-guard.service';
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
      { path: '', component: SearchResultsComponent, canActivate: [AuthGuardService] },
      { path: ':id', component: DetailedInformationComponent },
    ]),
  ],
})
export class YoutubeModule {}