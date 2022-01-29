import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { switchTheme } from "../../reduxStore/themeSwitch";
import {
  HeaderStyled,
  Logo,
  Toggle,
} from "../../StyledComponents/NavbarStyled";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";

function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  return (
    <HeaderStyled>
      <nav className={`nav border-2 ${state.theme ? "bg-light" : "bg-dark"}`}>
        <div className="d-flex mx-4">
          <ul className="list-unstyled d-flex my-2">
            <li>
              <Logo src="./movielogoo.png" alt="..." />
              <Link
                className={`text-decoration-none mx-3 ${state.theme ? "text-dark" : "text-light"}`}
                to="/"
              >
                Home Page
              </Link>
            </li>
            <li>
              
              <div className="movies mx-5 my-1">
                <Link
                  className={`text-decoration-none ${state.theme ? "text-dark" : "text-light"}`}
                  to="#"
                >
                  Movies
                  <IoMdArrowDropdown />
                </Link>
                <div className="categories">
                  <span>
                    <Link 
                    className={`text-decoration-none mx-3 ${state.theme ? "text-dark" : "text-light"}`}
                    to="/sort-filter/:popular">Popular</Link>
                  </span>
                  <span>
                    <Link 
                    className={`text-decoration-none mx-3 ${state.theme ? "text-dark" : "text-light"}`}
                    to="/sort-filter/:top_rated">Top Rated</Link>
                  </span>
                </div>
              </div>
            </li>
            </ul>
            </div>

            <div className="d-flex ms-auto mx-5">
            <ul className="list-unstyled d-flex my-2">
            <li>
              <Toggle
                className="mx-5"
                onClick={() => dispatch(switchTheme(state.theme))}
              >
                {state.theme ? <HiMoon /> : <CgSun />}
              </Toggle>
            </li>
            <li className="d-flex">
              <img src="profilepicture.jpg" alt="" />
              <div className="profile d-flex">
                <Link
                  className={`${state.theme ? "text-dark" : "text-light"}`}
                  to="/"
                >
                  <IoMdArrowDropdown />
                </Link>
                <div className="options">
                  <span>
                    <Link 
                    className={`text-decoration-none ${state.theme ? "text-dark" : "text-light"}`}
                    to="profile">Profile</Link>
                  </span>
                  <span>
                    <Link 
                    className={`text-decoration-none ${state.theme ? "text-dark" : "text-light"}`}
                    to="login">Login</Link>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </HeaderStyled>
  );
}

export default Header;
