import styled from "styled-components";

export const ContainerStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px; 

  & > div,
  & > ul {
    flex: 1;
  }
  width: 1000px;
  max-width: 100%;
  padding: 0 50px;
`
