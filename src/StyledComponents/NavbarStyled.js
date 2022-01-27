import styled from "styled-components";

export const Logo = styled.img`
  width: 35px;
  height: 35px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 10px 0 5px;
  }
`

export const Toggle = styled.button`
  cursor: pointer;
  border-radius: 50%;
  border: none;
  &:focus {
    outline: none;
  }
  transition: all .5s ease;
`;

export const HeaderStyled = styled.nav`
  .navbar {
    width: 100%;
    position: fixed;
    font-size: 14px;
    z-index: 999;
    padding: 12px;
    box-shadow: 0px 1px 5px black;
    font-family: "Montserrat", sans-serif;
  }

 .left {
   .categories {
        display: none;
        background-color: white;
        border-radius: 5px;
      }
      span{
        cursor: pointer;
      }
      &:hover {
        .categories {
          display: flex;
          flex-direction: column;
          position: absolute
        }
   }  
} 

.right {

  img {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      object-fit: cover;
      cursor: pointer;      
    }
}
  
.profile {

      .options {
        display: none;
        background-color: white;
        border-radius: 5px;
      }
      span{
        padding: 0px;
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
    
    padding-top: 15px;

  }
`
