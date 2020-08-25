import React, { Component } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";

import Header from "./ui/Header";
import theme from "./ui/Theme";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Header />
        <Switch>
          <Route exact path="/" render={() => <div>Home</div>} />
          <Route exact path="/services" render={() => <div>Services</div>} />
          <Route
            exact
            path="/customsoftware"
            render={<div>Custom Software</div>}
          />
          <Route
            exact
            path="/mobileapps"
            render={() => <div>Mobile Apps</div>}
          />
          <Route exact path="/websites" render={() => <div>Websites</div>} />
          <Route
            exact
            path="/revolution"
            render={() => <div>The Revolution</div>}
          />
          <Route exact path="/contactus" render={() => <div>Contact Us</div>} />
          <Route exact path="/aboutus" render={() => <div>About Us</div>} />
        </Switch>
      </ThemeProvider>
    );
  }
}

export default App;
