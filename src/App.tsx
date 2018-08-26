import React, { SFC } from 'react';
import styled from 'react-emotion';
import { Link } from 'react-router-dom';

const AppContainer = styled(`div`)({
  textAlign: 'center',
});

const AppHeader = styled(`header`)({
  backgroundColor: '#222',
  padding: '1rem',
  marginBottom: '0.5em',
  color: 'white',
});

const ButtonLink = styled(Link)({
  ['button']: {
    backgroundColor: 'yellowgreen',
    border: 'none',
    borderRadius: '0.25em',
    fontSize: '1.25rem',
    padding: '0.25em 0.5em',
    color: 'white',
  },
  ['button:hover']: {
    cursor: 'pointer',
    backgroundColor: 'lightseagreen',
  },
});

const App: SFC = () => (
  <AppContainer>
    <AppHeader>
      <h1>Choose a Feature</h1>
    </AppHeader>
    <ButtonLink to="/posts">
      <button type="button">GET POSTS via Rest API</button>
    </ButtonLink>
  </AppContainer>
);

export default App;
