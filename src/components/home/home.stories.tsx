import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Home from './Home';
storiesOf("Home story", module)
  .add("NavBar Style", () => (
    <Home/>
  ));
