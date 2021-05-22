import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Main, Repos, Files } from './pages';
import { NavBar, PageWrapper } from './layouts'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <PageWrapper>
        <Switch>
          <Route component={Main} path="/" exact />
          <Route component={Repos} path="/repos/:username" />
          <Route component={Files} path="/files/:username/:repository" />
        </Switch>
      </PageWrapper>
    </BrowserRouter>
  );
}

export default App;
