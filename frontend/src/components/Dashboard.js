import React from "react";
import styled from "styled-components";

import { ContextConsumer } from "../Context";
import Sidebar from "./Sidebar";

const StyledDashboard = styled.div`
  display: flex;

  height: 100vh;

  background: #f0f0f0;
`;

const Dashboard = ({ children }) => {
  return (
    <ContextConsumer>
      {value => {
        const { state } = value;

        return (
          <StyledDashboard>
            <Sidebar contextState={state} />
            {children}
          </StyledDashboard>
        );
      }}
    </ContextConsumer>
  );
};

export default Dashboard;
