import styled from "styled-components";

export const Button = styled.button`
  border-radius: 40px;
  border: none;
  box-shadow:   px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  padding: 5px 40px;
  background-color: ${({bg}) => bg || '#fff'};
  color: ${({color}) => color || '#333'};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
  `