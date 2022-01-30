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

  .search-box {
	border: solid 1px black;
	display: inline-block;
	position: relative;
	border-radius: 50px;
	input[type="text"] {
		font-family: Raleway, sans-serif;
		font-size: 10px;
		font-weight: bold;
		width: 12px;
		height: 18px;
		padding: 7px 10px 5px 10px;
		border: none;
		box-sizing: border-box;
		border-radius: 50px;
		transition: width $search-time cubic-bezier(0.68, -0.55, 0.27, 1.55) $reset-time;
		&:focus {
			outline: none;
		}
		&:focus, &:not(:placeholder-shown) {
			width: 200px;
			transition: width $search-time cubic-bezier(0.68, -0.55, 0.27, 1.55);
			+ button[type="reset"] {
				bottom: -3px;
				right: 2px;
				transition:
					bottom $reset-time ease-out $search-time
				, right $reset-time ease-out $search-time;
			}
			+ button[type="reset"]:after {
				top: 7px;
				right: 15px;
				opacity: 1;
				transition:
					top $reset-time ease-out ($search-time + $reset-time)
				, right $reset-time ease-out ($search-time + $reset-time)
				, opacity $reset-time ease ($search-time + $reset-time);
			}
		}
	}
	button[type="reset"] {
		background-color: transparent;
		width: 32px;
		height: 28px;
		border: 0;
		padding: 0;
		outline: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		bottom: -15px;
		right: -18px;
		transition: bottom $reset-time ease-out $reset-time, right $reset-time ease-out $reset-time;
		&:before, &:after {
			content: "";
			height: 13px;
			border-left: solid 1px black;
			position: absolute;
			transform: rotate(-45deg);
		}
		&:after {
			transform: rotate(45deg);
			opacity: 0;
			top: -20px;
			right: -10px;
			transition:
				top $reset-time ease-out
			, right $reset-time ease-out
			, opacity $reset-time ease-out;
		}
	}
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
  .nav {position: relative;}
  Link {
    float: none;
    display: block;
    text-align: left;
  }
  }
`;
