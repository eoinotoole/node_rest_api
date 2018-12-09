import React from "react";
import styled from "styled-components";

const StyledUserCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 29.333333%;
  height: 7rem;

  margin: 0 0 2rem 4%;

  background: #fff;
  box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.15);

  border-radius: 4px;
`;

const UserCard = ({ username }) => {
  return <StyledUserCard>{username}</StyledUserCard>;
};

export default UserCard;
