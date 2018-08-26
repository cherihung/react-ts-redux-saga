import React, { Component } from 'react';
import styled from 'react-emotion';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Dispatch } from 'redux';

import * as postsActions from '../../+state/actions/posts.actions';
import { IStoreState } from '../../+state/reducers';
import { IPost, IPostsStoreState } from '../../types/models';
import { IPostsDispatchProps, IPostsProps } from './component.types';
import { Post } from './Post';

const Container = styled(`div`)({
  width: '70vw',
  margin: '0 auto',
})

class Posts extends Component<IPostsProps> {

  constructor(props: IPostsProps) {
    super(props);
    this.props.onLoad();
  }

  public render() {
    const { items, error, loading } = this.props;

    if (error) { return <div>Error...</div>; }
    if (loading) { return <div>Loading...</div> }

    if (items) {
      return(
        <Container>
            { this.renderRow(items) }
        </Container>
      )
    }
    return null;
  }

  private renderRow = (items: IPost[]) => {
    return items.map((item: IPost) => (
      <Post key={item.id}>
        <label>Post Id: {item.id}</label>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </Post>
    ));
  }
}

const mapStateToProps = (state: IStoreState): IPostsStoreState => {
  return {
    items: state.posts.items,
    error: state.posts.error,
    loading: state.posts.loading,
  }
}

const mapDispatchToProps = (dispatch: Dispatch<postsActions.Actions>): IPostsDispatchProps => {
  return {
    onLoad: () => dispatch(postsActions.createPostsInit()),
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Posts));