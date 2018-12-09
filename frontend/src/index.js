import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";

import { ContextProvider, ContextConsumer } from "./Context";
import App from "./App";

render(
  <BrowserRouter>
    <ContextProvider>
      <ContextConsumer>
        {values => {
          const { state, fetchUsers } = values;
          return <App contextState={state} fetchUsers={fetchUsers} />;
        }}
      </ContextConsumer>
    </ContextProvider>
  </BrowserRouter>,
  document.getElementById("app")
);
