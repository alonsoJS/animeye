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

function App() {
  return (
    <StateProvider initialState={stateSchema} reducer={reducer}>
      <Router>
        <Switch>
          <Route path="/detail">
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
