import 'babel-polyfill';
import 'whatwg-fetch';
import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';

import Page from './Page.jsx';

const element = (
    <Router>
      <Page />
    </Router>
  );
  
const f = 0;
console.log(f);

ReactDOM.render(element, document.getElementById('content'));

if (module.hot) {
  const g='hot';
  console.log(g);
  module.hot.accept();
}