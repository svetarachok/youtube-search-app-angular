/* eslint-disable @typescript-eslint/default-param-last */
import { createReducer, on } from '@ngrx/store';
import * as AdminActions from './admin.actions';

import { CreatedVideo } from '../models/createdVideo';


export interface State {
  createdVideos: CreatedVideo[];
}

const initialState: State = {
  createdVideos: [], 
};

export const adminReducer = createReducer(
  initialState,
  on(AdminActions.adminAddVideo, (state, data) => ({ ... state, createdVideos: [...state.createdVideos, data] })),
);
