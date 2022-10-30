import * as fromYoutubeSearch from './youtube-search-reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const searchVideosSelector =
  createFeatureSelector<fromYoutubeSearch.SearchState>('youtubeSearch');

export const getSearchResults = createSelector(
  searchVideosSelector,
  (search) => search.searchResults,
);