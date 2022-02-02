import styled from "styled-components";

export const ContainerStyled = styled.div`
  background-color: ${({ theme }) => theme.dark};
  color: ${({ theme }) => theme.dark};
  margin: 0px 0px 40px;

  h2 {
    font-family: fantasy, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
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
    margin: 30px 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {

}
`;

export const BackgroundStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 110px 0px;    
`
