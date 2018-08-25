import { combineReducers, Reducer } from 'redux';

import { IPostsStoreState } from '../../types/models';
import postsReducer from './posts.reducer';

export interface IStoreState {
    posts: IPostsStoreState
}

type ReducerMaps = { [K in keyof IStoreState]: Reducer<any> };

const allReducers: ReducerMaps = {
    posts: postsReducer,
};

const rootReducer = combineReducers({...allReducers});

export default rootReducer;