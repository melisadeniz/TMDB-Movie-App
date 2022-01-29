import styled from "styled-components";

export const Logo = styled.img`
  width: 50px;
  height: 50px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 10px 0 5px;
  }
`;

export const Toggle = styled.button`
  cursor: pointer;
  border-radius: 50%;
  border: none;
  &:focus {
    outline: none;
  }
  transition: all 0.5s ease;
`;

export const HeaderStyled = styled.nav`
  .nav {
    text-decoration: none;
    width: 100%;
    position: fixed;
    font-size: 14px;
    padding: 6px;
    z-index: 998;
    box-shadow: 0px 1px 5px black;
    font-family: "Montserrat", sans-serif;
  }

  .movies {
    .categories {
      display: none;
      background-color: transparent;
      border-radius: 5px;
    }
    span {
      min-width: 100px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      padding: 1px;
      cursor: pointer;
    }
    &:hover {
      .categories {
        display: flex;
        flex-direction: column;
        position: absolute;
      }
    }
  }

  img {
    width: 30px;
    height: 30px;
    border-radius: 5px;
    object-fit: cover;
    cursor: pointer;
  }

  .profile {
    .options {
      display: none;
      background-color: transparent;
      border-radius: 5px;
    }
    span {
      min-width: 60px;
      box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
      z-index: 1;
      padding: 1px;
      cursor: pointer;
    }
    &:hover {
      .options {
        display: flex;
        flex-direction: column;
        position: absolute;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;

    padding-top: 15px;
  }
`;
