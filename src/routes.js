import React from 'react';
import { Router, IndexRoute, Route } from 'react-router';

import Layout from './components/Layout';
import Index from './components/Index';
import About from './components/About';
import Languages from './components/Languages';
import LanguageDetail from './components/Languages/LanguageDetail';
import Linguistics from './components/Linguistics';
import NotFound from './components/NotFound';
import Login from './components/Login';
import Register from './components/Register';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Index} />
      <Route path="/about" component={About} />
      <Route path="/languages" component={Languages}>
        <Route path="/languages/:id" component={LanguageDetail} />
      </Route>
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
      <Route path="/linguistics" component={Linguistics} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;