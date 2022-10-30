import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MaterialModule } from './material.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { httpInterceptorProviders } from './core/services/http-interceptors';
import { adminReducer } from './core/store/admin.reducer';
import { youtubeSearchReducer } from './youtube/store/youtube-search-reducer';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { VideoSearchEffects } from './youtube/store/effects/video-search.effect';
 
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    CoreModule,
    StoreModule.forRoot({ 
      admin: adminReducer, 
      youtubeSearch: youtubeSearchReducer, 
    }),
    EffectsModule.forRoot([VideoSearchEffects]),
    StoreDevtoolsModule.instrument({ logOnly: environment.production }),
    MaterialModule,
    HttpClientModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent],
})
export class AppModule { }
