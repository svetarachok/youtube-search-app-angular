import { createAction, props } from '@ngrx/store';
import { CreatedVideo } from '../models/createdVideo';

export const adminAddVideo = createAction('[Admin Page] Create Video', props<CreatedVideo>());
