import { Link } from "react-router-dom";
import styled from "styled-components";

export const CardStyled = styled.div`
  background-color: ${(props) =>
    props.theme === "dark" ? "#131414" : "white"};
  display: flex;
  width: 190px;
  height: 300px;
  flex-wrap: wrap;
  justify-content: space-around;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  padding: 5px;
  margin: 15px 10px;
  font-family: "Montserrat", sans-serif;

  .cardtitle {
    width: 180px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .title {
    text-align: center;
    font-size: 13px;
    padding: 8px 0;
  }

  .subtitle {
    display: flex;
    justify-content: space-between;
    font-family: fantasy;
    font-size: 12px;
    padding: 0 2px;
    padding-bottom: 3px;
  }

  img {
    width: 180px;
    height: 240px;
  }

  color: ${({ color }) => color || "#333"};
  &:hover {
    transform: scale(0.98);
  }
`;

export const LinkStyled = styled(Link)`
  text-decoration: none;
  &:hover {
    color: black;
  }
`;

export const CardContainer = styled.div`
 margin: 20px 0px;
    overflow: auto;
    white-space:nowrap;
    width: auto;
    height: auto;
    color: ${props => props.theme === "dark" ? "white" : "black"};
    &::-webkit-scrollbar {
        height: 13px;
    }
    &::-webkit-scrollbar-thumb {
        background: white; 
        border-radius: 2px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 3px black; 
        border-radius: 10px;
    }

`

