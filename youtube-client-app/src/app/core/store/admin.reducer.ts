/* eslint-disable @typescript-eslint/default-param-last */
import { createReducer, on } from '@ngrx/store';
import * as AdminActions from './admin.actions';

import { CreatedVideo } from '../models/createdVideo';


export interface State {
  newVideos: CreatedVideo[];
}

const initialState: State = {
  newVideos: [], 
};

export const adminReducer = createReducer(
  initialState,
  on(AdminActions.adminAddVideo, (state, data) => ({ ... state, newVideos: [...state.newVideos, data] })),
);
