import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import Dashboard from "./Dashboard";
import ButtonLink from "../styledComponents/ButtonLink";

const HomeIntro = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-self: center;

  width: 450px;

  margin: 0 auto;

  text-align: center;

  h1 {
    background: ${props => props.theme.dashboardDark};

    border-radius: 10px;

    color: #fff;
    line-height: 1.75;
    text-transform: uppercase;
    letter-spacing: 2.1px;

    margin-bottom: 1.35rem;
  }

  h2 {
    margin-bottom: 1.75rem;

    font-size: 1.1rem;
    font-weight: 500;
    color: #5e605f;
  }
`;

const Home = () => {
  return (
    <Dashboard>
      <HomeIntro>
        <h1>Users Dashboard</h1>
        <h2>A practice CRUD application using an Express REST API</h2>
        <ButtonLink to="/users">View users</ButtonLink>
      </HomeIntro>
    </Dashboard>
  );
};

export default Home;
