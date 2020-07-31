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
          <Route path= '/portfolio/' component= {About}/> 
          <Route path= '/portfolio/contact' component= {Contact}/> 
          <Route path= '/portfolio/portfolio' component= {Portfolio}/>
        </Switch>
      </div>
    </Router>
  );
}

// react export
export default App;
