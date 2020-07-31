// react import
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Nav from "./compouneds/nav"
import Info from "./compouneds/info"
import { About, Contact, Portfolio} from "./pages/index"

function App() {
  return (
    <Router>
      <div>
        <Nav/>
        <Info />
        <Switch>
          <Route exact path= '/' component= {About}/> 
          <Route exact path= '/contact' component= {Contact}/> 
          <Route exact path= '/portfolio' component= {Portfolio}/>
        </Switch>
      </div>
    </Router>
  );
}

// react export
export default App;
