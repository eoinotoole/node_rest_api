import React from "react";
import styled from "styled-components";

import SidebarUserCard from "./SidebarUserCard";

const StyledSidebar = styled.aside`
  width: 22%;
  height: 100%;
  max-width: 380px;
  min-width: 220px;

  padding: 2rem 0;

  background: ${props => props.theme.dashboardDark};
`;

const Sidebar = ({ contextState }) => {
  const userCards = contextState.users.map((user, id) => (
    <SidebarUserCard key={user.id} {...user} />
  ));

  return <StyledSidebar>{userCards}</StyledSidebar>;
};

export default Sidebar;
