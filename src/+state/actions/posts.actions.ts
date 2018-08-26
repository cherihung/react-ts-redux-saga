import { IPost } from '../../types/models';

export enum ActionTypes {
    POSTS_GET_INIT = '[POSTS] Get Init',
    POSTS_GET_SUCCESS = '[POSTS] Get Success',
    POSTS_GET_ERROR = '[POSTS] Get Error',
}

interface IPostsGetInit {
  readonly type: ActionTypes.POSTS_GET_INIT;
}

interface IPostsGetSuccess {
  readonly type: ActionTypes.POSTS_GET_SUCCESS;
  payload: IPost[];
}

interface IPostsGetError {
  readonly type: ActionTypes.POSTS_GET_ERROR;
  payload: any;
}

export type Actions = IPostsGetInit | IPostsGetSuccess | IPostsGetError;

export function createPostsInit(): IPostsGetInit {
  return {
    type: ActionTypes.POSTS_GET_INIT,
  };
}

export function createPostsSuccess(response: IPost[]): IPostsGetSuccess {
  return {
    type: ActionTypes.POSTS_GET_SUCCESS,
    payload: response,
  };
}

export function createPostsError(response: any): IPostsGetError {
  return {
    type: ActionTypes.POSTS_GET_ERROR,
    payload: response,
  };
}
