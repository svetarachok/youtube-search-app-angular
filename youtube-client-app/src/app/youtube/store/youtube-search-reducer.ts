/* eslint-disable @typescript-eslint/default-param-last */
import { createReducer, on } from '@ngrx/store';
import { SearchItemInterface } from '../models/search-item.model';
import * as YoutubeSearchActions from './youtube-search.actions';


export interface SearchState {
  searchResults: SearchItemInterface[];
  searchRequest: string,
}

const initialState: SearchState = {
  searchResults: [], 
  searchRequest: '',
};

export const youtubeSearchReducer = createReducer(
  initialState,
  on(YoutubeSearchActions.getSearchRequest, (state, { searchRequest }) => ({ ... state, searchRequest: searchRequest })),
  on(YoutubeSearchActions.getVideos, (state, { searchResults } ) => ({ ...state, searchResults: searchResults })),
  on(YoutubeSearchActions.clearStore, (state) => ({ ...state, searchResults: initialState.searchResults })),
);