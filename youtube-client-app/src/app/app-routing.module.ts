import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { DetailedInformationComponent } from './youtube/pages/detailed-information/detailed-information.component';

const routes: Routes = [
  { path: '', redirectTo: '/search-results', pathMatch: 'full' },
  {
    path: 'search-results', 
    loadChildren: () =>
      import('./youtube/youtube.module').then(m => m.YoutubeModule),
  },
  { path: 'detailed-info/:id', component: DetailedInformationComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
