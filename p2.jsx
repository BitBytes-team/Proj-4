import React from 'react';
import ReactDOM from 'react-dom';

import States from './components/states/States';
// eslint-disable-next-line import/no-unresolved
import Header from './components/header/header';

ReactDOM.render(
  <div>
  <Header/>
  <States />
  </div>,
  document.getElementById('reactapp'),
);
