import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detail from "./pages/detail";
import SearchResults from "./pages/search-results";
import {StateProvider} from "./context";
import stateSchema from './state';
import reducer from './reducer';
import Header from "./components/header";
import MainFrame from "./components/main-frame";

function App() {
  return (
    <StateProvider initialState={stateSchema} reducer={reducer}>
      <MainFrame>
       <Header/>
      </MainFrame>
      <Router>
        <Switch>
          <Route path="/anime/:id/:name">
            <Detail/>
          </Route>
          <Route path="/">
            <SearchResults/>
          </Route>
        </Switch>
      </Router>
    </StateProvider>
  );
}

export default App;
