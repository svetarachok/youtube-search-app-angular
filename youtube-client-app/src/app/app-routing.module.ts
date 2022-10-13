import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';
import { SearchResultsComponent } from './youtube/pages/main/search-results.component';

const routes: Routes = [
  { path: '', component: SearchResultsComponent },
  // { path: '/search', children: [
  //   { path: ':id' },
  // ] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
