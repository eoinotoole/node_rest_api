import React from "react";
import styled from "styled-components";

import UserCard from "./UserCard";

const StyledSidebar = styled.aside`
  width: 22%;
  height: 100%;
  max-width: 380px;
  min-width: 220px;

  background: ${props => props.theme.dashboardDark};
`;

const Sidebar = ({ contextState }) => {
  const userCards = contextState.users.map((user, id) => (
    <UserCard key={user.id} {...user} />
  ));

  return <StyledSidebar>sidebar</StyledSidebar>;
};

export default Sidebar;
