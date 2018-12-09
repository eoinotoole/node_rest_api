import React from "react";
import styled from "styled-components";

const StyledSidebar = styled.aside`
  width: 22%;
  height: 100%;
  max-width: 380px;
  min-width: 220px;

  background: ${props => props.theme.dashboardDark};
`;

const Sidebar = ({ contextState }) => {
  return <StyledSidebar>Sidebar</StyledSidebar>;
};

export default Sidebar;
