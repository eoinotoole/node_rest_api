import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledSidebarUserCard = styled(NavLink)`
  display: block;

  padding: 1rem 2rem;

  cursor: pointer;

  &:hover {
    background: #272d2b;
  }

  .username {
    display: block;

    font-size: 0.9rem;
    color: #fff;
  }
`;

const selectedStyle = {
  backgroundColor: "#865EB0"
};

const SidebarUserCard = ({ id, username }) => {
  return (
    <StyledSidebarUserCard to={`/users/${id}`} activeStyle={selectedStyle}>
      <span className="username">{username}</span>
    </StyledSidebarUserCard>
  );
};

export default SidebarUserCard;
