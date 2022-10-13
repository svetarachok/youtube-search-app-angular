import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { FilterBarComponent } from './components/filter-bar/filter-bar.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    SearchBarComponent,
    FilterBarComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
  ],
})
export class CoreModule {}