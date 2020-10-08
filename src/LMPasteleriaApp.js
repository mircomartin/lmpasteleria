import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
} from "react-router-dom";

//Aos
import AOS from 'aos';
import 'aos/dist/aos.css';

//Components
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Index } from './components/pages/Index';
import { Sobremi } from './components/pages/Sobremi';
import { Contacto } from './components/pages/Contacto';
import { Menu } from './components/pages/Menu';

function LMPasteleriaApp() {

  AOS.init();

  return (
    <Router>
      <Header/>
        <Switch>
          <Route exact path="/" component={Index} />
          <Route exact path="/sobremi" component={Sobremi} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/menu" component={Menu} />

          <Redirect to="/"/>
        </Switch>
      <Footer/>
    </Router>
  );
}

export default LMPasteleriaApp;
