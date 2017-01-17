import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Languages from './components/Languages';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/languages" component={Languages} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;