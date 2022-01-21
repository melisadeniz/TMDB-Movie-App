import styled from "styled-components";

export const Logo = styled.img`
  width: 35px;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin: 40px 0 30px;
  }
`

export const HeaderStyled = styled.nav`
  background-color: ${({ theme }) => theme.colors.navbar}; 
  color: white;
  font-size: 14px;

  .container {
    justify-content: space-between;
    height: 50px;
    }
  
  .left {
  display: flex;
  align-items: center;
  ul {
    list-style-type: none;
  }
}
  .right {
    display: flex;
    align-items: center;   

    img {
      width: 30px;
      height: 30px;
      border-radius: 5px;
      object-fit: cover;
      cursor: pointer;      
    }

  }
  @media(max-width: ${({theme}) => theme.mobile}){
    flex-direction: column;
  }
`
