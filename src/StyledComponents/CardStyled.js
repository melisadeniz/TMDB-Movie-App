import styled from "styled-components";

export const CardStyled = styled.div`
  background-color: ${({ theme }) => theme.colors.light};
  display: flex;
  flex-wrap: wrap;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  text-align: center;
  flex-direction: column;
  padding: 10px;
  margin: 5px 0;
  font-family: "Montserrat", sans-serif;

  .title {
    color: black;
    width: 100%;
    text-align: center;
    font-size: 15px;
    padding: 8px 0;
  }

  .subtitle {
    color: black;
    display: flex;
    justify-content: space-between;
    font-size: 13px;
    padding: 0 2px;
    padding-bottom: 3px;
  }

  img {
    width: 170px;
    height: 220px;
  }

  color: ${({ color }) => color || "#333"};
  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;
