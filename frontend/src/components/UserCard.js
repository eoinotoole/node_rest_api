import React from "react";
import styled from "styled-components";

const StyledUserCard = styled.div`
  width: 29.333333%;

  margin: 0 0 2rem 4%;
  padding: 1.5rem;

  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);

  border-radius: 4px;

  text-align: center;

  @media (max-width: 950px) {
    width: 46%;
  }

  .profile {
    display: inline-block;

    width: 4rem;
    height: 4rem;

    margin-bottom: 0.75rem;

    background: ${props => props.theme.dashboardDark};

    border-radius: 50%;
  }

  .username {
    display: block;
  }
`;

const UserCard = ({ username }) => {
  return (
    <StyledUserCard>
      <span className="profile" />
      <span className="username">{username}</span>
    </StyledUserCard>
  );
};

export default UserCard;
