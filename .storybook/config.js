import { configure } from '@storybook/react';

import styles from '../src/index.css';

const req = require.context('../stories', true, /\.story.tsx?$/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);

const styleEl = document.createElement('style');
styleEl.appendChild(document.createTextNode(styles));
document.head.appendChild(styleEl);