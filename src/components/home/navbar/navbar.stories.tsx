import { storiesOf } from '@storybook/react';
import * as React from 'react';
import NavBar from './NavBar';
storiesOf("Header story", module)
  .add("NavBar Style", () => (
    <NavBar/>
  ));
