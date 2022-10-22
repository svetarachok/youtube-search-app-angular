import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './auth/services/auth-guard/auth-guard.service';
import { AdminPageComponent } from './core/pages/admin-page/admin-page.component';
import { NotFoundComponent } from './core/pages/not-found/not-found.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'search-results', 
    loadChildren: () =>
      import('./youtube/youtube.module').then(m => m.YoutubeModule),
  },
  {
    path: 'login', 
    loadChildren: () =>
      import('./auth/auth.module').then(m => m.AuthModule),
  },
  { path: 'admin', component: AdminPageComponent, canActivate: [AuthGuardService] },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
