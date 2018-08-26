import { storiesOf } from '@storybook/react';
import * as React from 'react';

import { Post } from '../src/features/Posts/Post';
import Provider from './StoryProvider';

const stories = storiesOf('Demo Storybook', module);

stories.addDecorator((story: any) => <Provider story={story()} />);

stories.add('Posts', () => (
  <Post>
    <label>Post Id</label>
    <h2>Title Text Happy Panda</h2>
    <p>Four dollar toast fam try-hard schlitz tbh photo booth asymmetrical. 
      Vape marfa occupy meh. Next level hammock squid, 
      street art tofu mustache chillwave austin hexagon salvia semiotics
    </p>
  </Post>
));
