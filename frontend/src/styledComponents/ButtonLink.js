import styled from "styled-components";
import { Link } from "react-router-dom";

const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 2rem;
  margin: 0 auto;

  background: #a06cd5;

  border-radius: 50px;

  color: #fff;
  text-align: center;

  &:hover {
    background: #865eb0;
  }
`;

export default ButtonLink;
