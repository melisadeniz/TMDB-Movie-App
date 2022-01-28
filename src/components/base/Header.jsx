import { Link } from 'react-router-dom';
import routes from "../../routes";
import { useSelector, useDispatch } from "react-redux"
import { switchTheme } from "../../reduxStore/themeSwitch"
import { HeaderStyled, Logo, Toggle } from "../../StyledComponents/NavbarStyled"
import { IoMdArrowDropdown } from "react-icons/io";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi"


function Header() {

  const dispatch = useDispatch() 
  const state = useSelector((state) => state)
 

  return (
     
<HeaderStyled>     
 
<nav className={`nav border-2 ${state.theme ? "bg-light" : "bg-dark"}`}>
  <div className="navcontainer">
      <ul className='list-unstyled d-flex m-1'>
         <li><div className='homepage mx-5'><Logo src='./movielogo.png' alt='...'/></div></li>
         <li><Link className="text-light" to="/">HomePage</Link></li>
         <li> <div className='movies mx-5'><Link className="d-flex text-light" to="/">Movies<IoMdArrowDropdown /></Link>
       <div className="categories">
         <span><Link to="popular">Popular</Link></span>
         <span><Link to="top-rated">Top Rated</Link></span>
       </div>
       </div>
       </li>
         <li> 
           <Toggle className='mx-5'
       onClick={() => dispatch(switchTheme(state.theme))}>
         {
           state.theme ? <HiMoon /> : <CgSun />
         }
       </Toggle>
        </li>
         <li>
           <img src="profilepicture.jpg" alt="" />
       </li>
         <li> 
          <div className='profile d-flex'>
       <Link className="text-light" to="/"><IoMdArrowDropdown /></Link>
       <div className="options">
       <span><Link to="profile">Profile</Link></span>
       <span><Link to="login">Login</Link></span>
       </div>
          </div>
       </li>
    </ul>   
  </div>
 </nav>
</HeaderStyled>                
      
  )
}

export default Header




