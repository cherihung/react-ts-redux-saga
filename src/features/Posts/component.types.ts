import { RouteComponentProps } from 'react-router';

import { IPostsStoreState } from '../../types/models';

export interface IPostsProps extends IPostsStoreState, RouteComponentProps<any> {
  onLoad: () => void;
}

export type IPostsDispatchProps = Pick<IPostsProps, 'onLoad'>;