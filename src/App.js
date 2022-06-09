import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Homepage from './components/views/HomePage/HomePage';

import './styles/bootstrap.scss';
import './styles/global.scss';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Homepage} />
        <Route path="/:page" exact component={Homepage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
