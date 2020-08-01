// react import
import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import Nav from "./compouneds/nav"
import Info from "./compouneds/info"
import { About, Contact, Portfolio} from "./pages/index"

function App() {
  return (
    <HashRouter>
      <div>
        <Nav/>
        <Info />
        <Switch>
          <Route exact path='/' component= {About}/> 
          <Route path='/about' component= {About}/> 
          <Route path='/contact' component= {Contact}/> 
          <Route path='/portfolio' component= {Portfolio}/>
        </Switch>
      </div>
    </HashRouter>
  );
}

// react export
export default App;
