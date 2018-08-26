import styled from 'react-emotion';

export const Post = styled(`div`)({
  padding: '1rem',
  marginBottom: '0.5em',
  ['h2']: {
    textTransform: 'capitalize',
    margin: '0.5em 0 0'
  },
  ['p']: {
    padding: '0',
    margin: '0',
    fontSize: '1.5em',
    lineHeight: '1.25em'
  },
  ['label']: {
    backgroundColor: 'beige',
    padding: '0.1em',
  }
})