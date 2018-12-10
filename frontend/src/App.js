import React, { Component, Fragment } from "react";
import { Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { ContextConsumer } from "./Context";
import GlobalStyles from "./styledComponents/GlobalStyles";
import Home from "./components/Home";
import Users from "./components/Users";
import UserProfile from "./components/UserProfile";

const theme = {
  dashboardDark: "#19231f"
};

class App extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  render() {
    return (
      <Fragment>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={Users} />
            <Route path="/users/:id" component={UserProfile} />
            <Route component={Home} />
          </Switch>
        </ThemeProvider>
      </Fragment>
    );
  }
}

export default App;
