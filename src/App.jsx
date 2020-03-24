import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// components
import Advisor from './components/advisor';
import Contact from './components/contact';
import Home from './components/home';
import Members from './components/members';
import Works from './components/works';
import Nav from './components/navbar';
// style
import ResetStyle from "./theme/ResetStyles";
import GlobalStyles from './theme/GlobalStyles';


function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path='/advisor' component={Advisor} />
          <Route path='/contact_us' component={Contact} />
          <Route path='/members' component={Members} />
          <Route path='/our_works' component={Works} />
          <Route path='/' exact component={Home} />
        </Switch>
      </div>
      <ResetStyle />
      <GlobalStyles />
    </Router>
  );
}

export default App;
