import * as fromAdmin from './admin.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';


export const createdVideosSelector =
  createFeatureSelector<fromAdmin.State>('admin');

export const getCreatedVideos = createSelector(
  createdVideosSelector,
  (videos) => videos.createdVideos,
);