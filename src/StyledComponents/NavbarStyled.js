import styled from "styled-components";

export const Logo = styled.img`
  width: 35px;
  height: 35px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 10px 0 5px;
  }
`

export const HeaderStyled = styled.nav`
  .navbar {
    width: 100%;
    color: white;
    position: fixed;
    top: 0;
    font-size: 14px;
    z-index: 999;
    background-color: ${({ theme }) => theme.colors.dark}; 
  }

  .container {
    padding: 5px 10px;
    justify-content: space-between;
    height: 55px;
    }
    
.left {
  
  img {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      object-fit: cover;
      cursor: pointer;      
    }

      .options {
        display: none;
        background-color: gray;
        border-radius: 5px;
      }

      span{
        padding: 5px;
        cursor: pointer;
      }

      &:hover {
        .options {
          display: flex;
          flex-direction: column;
          position: absolute
        }

}
  
    }

  @media(max-width: ${({theme}) => theme.mobile}){
    flex-direction: column;
  }
`
