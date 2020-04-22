import { storiesOf } from '@storybook/react';
import * as React from 'react';
import Login from './Login';
storiesOf("login story", module)
  .add("login form", () => (
    <Login/>
  ));
