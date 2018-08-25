import { all, takeLatest } from 'redux-saga/effects';

import { ActionTypes as fromPostsActionTypes } from '../+state/actions/posts.actions';
import * as fromPosts from '../+state/effects/posts.effects';


export function* watcherSaga() {
  yield all([
    takeLatest(fromPostsActionTypes.POSTS_GET_INIT, fromPosts.getPostsSaga)
  ])
}