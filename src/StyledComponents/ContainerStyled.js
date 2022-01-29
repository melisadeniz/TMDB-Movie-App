import styled from "styled-components";

export const ContainerStyled = styled.div`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.dark};


  h2 {
    font-family: fantasy;
  }

  h1 {
    margin-top: 5px;
  }

  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .login_form {
    display: flex;
    flex-direction: column;
  }
`;
