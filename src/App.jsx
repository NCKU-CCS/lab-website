import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ResetStyle from "./theme/ResetStyles";
import GlobalStyles from './theme/GlobalStyles';


function App() {
  return (
    <Router>
      <div className="App">
        <p>Hello World</p>
      </div>
      <ResetStyle />
      <GlobalStyles />
    </Router>
  );
}

export default App;
