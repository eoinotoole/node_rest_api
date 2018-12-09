import React, { Component } from "react";
import styled from "styled-components";

import { ContextConsumer } from "../Context";
import Dashboard from "./Dashboard";
import UserCard from "./UserCard";

const StyledUsers = styled.section`
  width: 100%;

  padding: 4rem;

  .grid {
    display: flex;
    flex-flow: row wrap;

    margin-left: -4%;
  }
`;

class Users extends Component {
  render() {
    return (
      <ContextConsumer>
        {values => {
          const { state } = values;

          const userCards = state.users.map((user, i) => (
            <UserCard key={user.id} {...user} />
          ));

          return (
            <Dashboard>
              <StyledUsers>
                <div className="grid">{userCards}</div>
              </StyledUsers>
            </Dashboard>
          );
        }}
      </ContextConsumer>
    );
  }
}

export default Users;
