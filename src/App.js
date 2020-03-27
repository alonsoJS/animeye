import React, { useEffect, Fragment } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detail from "./pages/detail";
import SearchResults from "./pages/search-results";
import Header from "./components/header";
import MainFrame from "./components/main-frame";
import useActions from './use-actions';
import { isMobile } from './utils/utils';

function App() {
  const { updateIsMobile } = useActions();

  useEffect(windowResizeEvent, []);

  function windowResizeEvent() {
    updateIsMobile(isMobile());
    window.addEventListener('resize', () => updateIsMobile(isMobile()));
  }

  return (
    <Fragment>
      <Router>
        <MainFrame>
         <Header/>
        </MainFrame>
        <Switch>
          <Route path="/anime/:id/:name">
            <Detail/>
          </Route>
          <Route path="/">
            <SearchResults/>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
