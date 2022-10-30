import { Injectable } from '@angular/core';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import { mergeMap, map } from 'rxjs';

import * as YoutubeSearchActions from '../youtube-search.actions';
import { SearchService } from '../../services/search-service/search.service';
import { SearchState } from '../youtube-search-reducer';

@Injectable()
export class VideoSearchEffects {
  videoIdsArray: string[] = [];

  getVideoIds$ = createEffect(() => { 
    return this.actions$.pipe(
      ofType(YoutubeSearchActions.SEARCH_REQUEST),
      mergeMap((action: SearchState) => {
        return this.searchService.getDataFromSearchList(action.searchRequest)
          .pipe(
            map(videos => {
              console.log(videos.items);
              return YoutubeSearchActions.getVideos({ searchResults: videos.items });
            }),
          );
      }),
    );
  });

  constructor(
    private actions$: Actions,
    private searchService: SearchService,
  ) {}
}