import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { Main, Repos, Files } from './pages';
import { NavBar, PageWrapper } from './layouts';

const App: React.FC = () => {
  return (
    <Router>
      <NavBar />
      <PageWrapper>
        <Switch>
          <Route component={Main} path="/" exact />
          <Route component={Repos} path="/repos/:username" />
          <Route component={Files} path="/files/:username/:repository" />
        </Switch>
      </PageWrapper>
    </Router>
  );
}

export default App;
