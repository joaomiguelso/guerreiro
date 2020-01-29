import React from "react";
import {createMemoryHistory} from "history";
import {Route, Router, Switch} from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.4.0";
import 'typeface-roboto';
import 'typeface-roboto-slab';
// pages for this product
import Components from "./Components/Components.jsx";
import LandingPage from "./landing-page";
import ProfilePage from "./profile-page";
import LoginPage from "./login-page";
import AboutUsPage from "./about-page";
import ContactUsPage from "./contact-page";

let hist = createMemoryHistory();

export default () => (
  <Router history={hist}>
    <Switch>
      <Route path="/Components" component={Components} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/login-page" component={LoginPage} />
      <Route path="/about-page" component={AboutUsPage} />
      <Route path="/contact-page" component={ContactUsPage} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </Router>
);
