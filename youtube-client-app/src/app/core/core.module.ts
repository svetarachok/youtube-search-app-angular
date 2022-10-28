import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { AdminPageComponent } from './pages/admin-page/admin-page.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    FilterBarComponent,
    NotFoundComponent,
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    RouterModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule {}