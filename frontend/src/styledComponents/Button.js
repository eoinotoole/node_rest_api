import styled from "styled-components";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.8rem 2rem;

  background: #a06cd5;

  border-radius: 50px;

  color: #fff;
  font-weight: 700;
  text-align: center;

  &:hover {
    background: #865eb0;
  }
`;

export default Button;
