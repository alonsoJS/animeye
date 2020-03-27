import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './scss/main.scss';
import {StateProvider} from "./context";
import stateSchema from "./state";
import reducer from "./reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={stateSchema} reducer={reducer}>
      <App />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
