import { configure } from '@storybook/react';

function loadStories() {
  require('../stories/Page');
  require('../stories/Card');
  require('../stories/Input');
  require('../stories/icons3');
    // You can require as many stories as you need.
}

configure(loadStories, module);
