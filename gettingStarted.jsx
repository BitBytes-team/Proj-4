import React from 'react';
import ReactDOM from 'react-dom';
import './styles/main.css';

import Example from './components/example/Example';
// eslint-disable-next-line import/no-unresolved
import Header from './components/header/header';

ReactDOM.render(
  <div>
    <Header/>
  <Example />
  </div>,
  document.getElementById('reactapp'),
);
