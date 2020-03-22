import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Detail from "./pages/detail";
import SearchResults from "./pages/search-results";

function App() {
  return (
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
  );
}

export default App;
