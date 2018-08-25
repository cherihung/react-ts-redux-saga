import { combineReducers, Reducer } from 'redux';

import postsReducer, { IPostsState } from './posts.reducer';

export interface IStoreState {
    posts: IPostsState
}

type StoreStateKeys = keyof IStoreState;
type ReducerMaps = { [K in StoreStateKeys]: Reducer<any> };

const allReducers: ReducerMaps = {
    posts: postsReducer,
};

const rootReducer = combineReducers({...allReducers});

export default rootReducer;