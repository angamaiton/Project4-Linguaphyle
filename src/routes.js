import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import Layout from './components/Layout';
import Index from './components/Index';
import Languages from './components/Languages';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index} />
      <Route path="/languages" component={Languages} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;