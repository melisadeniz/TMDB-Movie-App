import { HeaderStyled, Logo } from "../../StyledComponents/NavbarStyled"
import { FaSearch } from "react-icons/fa"
import { IoMdArrowDropdown } from "react-icons/io"
import { Link } from 'react-router-dom';
import routes from "../../routes";


function Header() {


  return (
     
<HeaderStyled>     
 <nav className="navbar">
  <div className="container row">
     <div className="left col-2 d-flex mb-2">
     <Logo src='./movielogo.png' alt='...'/>
     <div>
       <Link className="nav-link d-flex text-light" to="/">Movies<IoMdArrowDropdown /></Link>
       <div className="categories">
       <span><Link className="nav-link text-light" to="popular">Popular</Link></span>
       <span><Link className="nav-link text-light" to="top-rated">Top Rated</Link></span>
       </div>
      </div>
    </div>
  

    <div className='col-2'>
      <ul className='list-unstyled d-flex'>
        {routes
        .filter((item) => item.isNav)
         .map((item, index) => (     
          <li key={index}>
           <Link className="nav-link text-light mx-1" to={item.path}>{item.title}</Link>
          </li>
        ))} 
      </ul>
     </div>

   <div className="right col-8 d-flex">
     <div>
       <Link className="text-light mx-5" to=""><FaSearch /></Link>
     </div>

       
       <img src="profilepicture.jpg" alt="" />
       <div className='profile d-flex'>
       <Link className="text-light" to="/"><IoMdArrowDropdown /></Link>
       <div className="options">
       <span><Link className="nav-link text-light" to="profile">Profile</Link></span>
       </div>
      
      </div>
   </div>
   </div>
 </nav>
</HeaderStyled>                
      
  )
}

export default Header