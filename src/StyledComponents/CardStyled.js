import styled from "styled-components";

export const CardStyled = styled.div`
  display: inline-table;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  margin: 30px 5px;
  padding: 20px;
  text-align: center;
  img {
    width: 60px;
    height: 135px;
  }
  color: ${({color}) => color || '#333'};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`