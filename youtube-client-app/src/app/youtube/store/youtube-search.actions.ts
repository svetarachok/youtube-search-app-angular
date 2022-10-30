import { createAction, props } from '@ngrx/store';
import { SearchItemInterface } from '../models/search-item.model';

export const SEARCH_REQUEST = '[Search Results Page] Get Search Request';
export const SEARCH_VIDEOS = '[Search Results Page] Get Searched Videos';
export const REMOVE_VIDEOS = '[Search Results Page] Clear Search Results Page';

export const getSearchRequest = createAction(SEARCH_REQUEST, props<{ searchRequest: string }>());

export const getVideos = createAction(SEARCH_VIDEOS, props<{ searchResults: SearchItemInterface[] }>());

export const clearStore = createAction(REMOVE_VIDEOS);