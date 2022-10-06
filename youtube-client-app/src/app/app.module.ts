import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SearchResultsComponent } from './components/search-results/search-results.component';
import { SearchItemComponent } from './components/search-results/search-item/search-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { SearchPipe } from './pipes/search-pipe/search-pipe.pipe';
import { SearchBarComponent } from './components/header/search-bar/search-bar.component';
import { FilterBarComponent } from './components/header/filter-bar/filter-bar.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchResultsComponent,
    SearchItemComponent,
    SearchPipe,
    SearchBarComponent,
    FilterBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
