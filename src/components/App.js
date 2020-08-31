import React, { useState } from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import { Switch, Route } from "react-router-dom";

import Header from "./ui/Header";
import theme from "./ui/Theme";
import Footer from "./ui/Footer";

const App = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [value, setValue] = useState(0);

  return (
    <ThemeProvider theme={theme}>
      <Header
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        value={value}
        setValue={setValue}
      />
      <Switch>
        <Route
          exact
          path="/"
          render={() => <div style={{ height: "100vh" }}>Home</div>}
        />
        <Route exact path="/services" render={() => <div>Services</div>} />
        <Route
          exact
          path="/customsoftware"
          render={() => <div>Custom Software</div>}
        />
        <Route exact path="/mobileapps" render={() => <div>Mobile Apps</div>} />
        <Route exact path="/websites" render={() => <div>Websites</div>} />
        <Route
          exact
          path="/revolution"
          render={() => <div>The Revolution</div>}
        />
        <Route exact path="/contactus" render={() => <div>Contact Us</div>} />
        <Route exact path="/aboutus" render={() => <div>About Us</div>} />
      </Switch>
      <Footer
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
        value={value}
        setValue={setValue}
      />
    </ThemeProvider>
  );
};

export default App;
