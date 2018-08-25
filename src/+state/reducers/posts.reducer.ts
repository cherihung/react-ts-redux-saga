import produce from 'immer';

import { IPostsStoreState } from '../../types/models';
import { Actions, ActionTypes } from '../actions/posts.actions';

const initialState: IPostsStoreState = {
  error: undefined,
  items: null,
  loading: false,
}

const postsReducer = (state = initialState, action: Actions) =>
  produce(state, (draft: IPostsStoreState) => {
      switch(action.type) {
          case ActionTypes.POSTS_GET_INIT:
            draft.loading = true;
            break;
          case ActionTypes.POSTS_GET_SUCCESS:
            draft.loading = false;
            draft.error = false;
            draft.items = action.payload;
            break;
          case ActionTypes.POSTS_GET_ERROR:
            draft.loading = false;
            draft.error = true;
            break;
      }
    });

export default postsReducer;