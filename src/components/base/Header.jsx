import { HeaderStyled, Logo } from "../../StyledComponents/NavbarStyled"
import { FaSearch } from "react-icons/fa"
import { IoMdArrowDropdown } from "react-icons/io"
import { Link } from 'react-router-dom';
import routes from "../../routes";


function Header() {


  return (
     
     
<HeaderStyled>     
 <nav className="navbar">
  <div className="container">
    <div className="row d-flex align-items-center">
     <div className="col-4 d-flex">
     <Logo src='./movielogo.png' alt='...'/>
     <Link className="btn dropdown-toggle">Movies</Link>
       <ul className="dropdown-menu">
        <li><Link className="dropdown-item">Popular</Link></li>
        <li><Link className="dropdown-item">Top Rated</Link></li>
       </ul>
      </div>

    
    <div className='col-4'>
      <ul className='list-unstyled d-flex'>
        {routes
        .filter((item) => item.isNav)
         .map((item, index) => (     
          <li key={index}>
           <Link className="nav-link text-light" to={item.path}>{item.title}</Link>
          </li>
        ))} 
      </ul>
     </div>
    <div className='left col-2 d-flex'>
       <Link className="text-light mx-3" to="search"><FaSearch /></Link>
       <img src="profilepicture.jpg" alt="" />
       <div className="profile">
       <Link className="text-light mx-1" to="/"><IoMdArrowDropdown /></Link>
       <div className="options">
       <span>Login</span>
       <span>Settings</span>
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