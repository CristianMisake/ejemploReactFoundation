import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";
//componentes
import Header from './components/header';
import Padre from './components/componentePadre';
import OtraPagina from './components/otraPagina';
import Error404 from './components/error404';

const App = () => {
  return (
    <Router>
      <Header />
      <div className="callout">
        <Switch>
            <Route path="/" exact component={Padre} />
            <Route path="/otraPagina" exact component={OtraPagina} />
            <Route path='/error404' exact component={Error404} />
            <Route path="*" status={404}>
              <Redirect to='/error404' />
            </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
