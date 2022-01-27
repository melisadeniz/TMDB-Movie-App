import styled from "styled-components";

export const ContainerStyled = styled.div`
  background-color: ${({ theme }) => theme.dark};
  display: flex;

  h1 {
 
  margin-top: 5px;
  }

  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
  }

  .login_form {
    display: flex;
    flex-direction: column;
  }
`
