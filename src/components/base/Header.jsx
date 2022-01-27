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
 <nav className="navbar">
  <div className="container">
    <div className="row">
     <div className="left col-4 d-flex">
     <Logo src='./movielogo.png' alt='...'/>
     <div>
       <Link className="nav-link d-flex" to="/">Movies<IoMdArrowDropdown /></Link>
       <div className="categories">
       <span><Link to="popular">Popular</Link></span>
       <span><Link to="top-rated">Top Rated</Link></span>
       </div>
      </div>
    </div>
  

    <div className='col-4'>
      <ul className='list-unstyled d-flex'>
        {routes
        .filter((item) => item.isNav)
         .map((item, index) => (     
          <li key={index}>
           <Link className="mx-5" to={item.path}>{item.title}</Link>
          </li>
        ))} 
      </ul>
     </div>

   <div className="right col-4 d-flex">
     <div>
       <Toggle className='mx-5'
       onClick={() => dispatch(switchTheme(state.theme))}>
         {
           state.theme ? <HiMoon /> : <CgSun />
         }
       </Toggle>  
     </div>
       
       <img src="profilepicture.jpg" alt="" />
       <div className='profile d-flex'>
       <Link to="/"><IoMdArrowDropdown /></Link>
       <div className="options">
       <span><Link to="profile">Profile</Link></span>
       <span><Link to="login">Login</Link></span>
       </div>
      
      </div>
   </div>
   </div>
   </div>
 </nav>
</HeaderStyled>                
      
  )
}

export default Header




