import produce from 'immer';

import { IPosts } from '../../types/models';
import { Actions, ActionTypes } from '../actions/posts.action';

export interface IPostsState {
  items: IPosts[] | null;
  error: any;
  loading: boolean;
}

const initialState: IPostsState = {
  error: undefined,
  items: null,
  loading: false,
}

const postsReducer = (state = initialState, action: Actions) => {
  produce(state, (draft: IPostsState) => {
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
      }
    })};

export default postsReducer;