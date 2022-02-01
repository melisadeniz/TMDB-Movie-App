import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useQuery } from "react-query";
import { searchValue } from "../../reduxStore/searchValue";
import { switchTheme } from "../../reduxStore/themeSwitch";
import {
  HeaderStyled,
  Logo,
  Toggle,
  ProfileImage
} from "../../styledComponents/NavbarStyled";
import { IoMdArrowDropdown } from "react-icons/io";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import { DebounceInput } from "react-debounce-input";
import { fetchSearchMovies } from "../../data";

function Header() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [movieMatch, setMovieMatch] = useState([]);
  const { search, user } = useSelector((state) => state);


  const singleMovieData = useQuery(
    ["search movies", search],
    () => fetchSearchMovies(search),
    { select: (data) => data.data.results, retry: false }
  );

  const setSearch = (value) => {
    let matches = singleMovieData?.data?.filter((movie) => {
      const regex = new RegExp(`${value}`, "gi");
      return movie.title.match(regex);
    });
    setMovieMatch(matches);
  };

  const onChange = (e) => {
    setSearch(e.target.value);
    dispatch(searchValue(e.target.value));
  };

  return (
    <HeaderStyled>
      <nav className={`nav border-2 ${state.theme ? "bg-light" : "bg-dark"}`}>
        <div className="d-flex mx-4">
          <ul className="nav-menu list-unstyled d-flex my-2">
            <li>
              <Logo src="./movielogoo.png" alt="..." />
              <Link
                className={`text-decoration-none mx-3 ${
                  state.theme ? "text-dark" : "text-light"
                }`}
                to="/"
              >
                Home Page
              </Link>
            </li>
            <li>
              <div className="movies mx-5 my-1">
                <Link
                  className={`text-decoration-none ${
                    state.theme ? "text-dark" : "text-light"
                  }`}
                  to="#"
                >
                  Movies
                  <IoMdArrowDropdown />
                </Link>
                <div className="categories">
                  <span>
                    <Link
                      className={`text-decoration-none mx-3 ${
                        state.theme ? "text-dark" : "text-light"
                      }`}
                      to="/sort-filter/:popular"
                    >
                      Popular
                    </Link>
                  </span>
                  <span>
                    <Link
                      className={`text-decoration-none mx-3 ${
                        state.theme ? "text-dark" : "text-light"
                      }`}
                      to="/sort-filter/:top_rated"
                    >
                      Top Rated
                    </Link>
                  </span>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="d-flex ms-auto mx-5">
          <ul className="list-unstyled d-flex my-2">
            <li>
              <form className="search-box">
                <DebounceInput
                  type="text"
                  id="search"
                  list="results" 
                  name="search"
                  debounceTimeout={300}
                  placeholder="Search"
                  onChange={(e) => onChange(e)}
                />
               
                <datalist id="results">
                  {movieMatch &&
                    movieMatch.map((item) => (
                      <option value={item.title}>{item.title}</option>
                    ))}
                </datalist>
                <button type="reset"></button>  
              </form>       
              
            </li>
            <li>
              <Toggle
                className="mx-5"
                onClick={() => dispatch(switchTheme(state.theme))}
              >
                {state.theme ? <HiMoon /> : <CgSun />}
              </Toggle>
            </li>
            {!user.userLogin ?  <li>
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
                      className={`text-decoration-none ${
                        state.theme ? "text-dark" : "text-light"
                      }`}
                      to="login"
                    >
                      Login
                    </Link>
              
                  </span>
                </div>
              </div>
            </li>
            
            :

            <li className="d-flex">
                <Link to="/profile" >
                    <ProfileImage width={"30px"} src={user.avatarUrl} alt="" />
                </Link>
            </li>
            
            }
          </ul>
        </div>
      </nav>
    </HeaderStyled>
  );
}

export default Header;
