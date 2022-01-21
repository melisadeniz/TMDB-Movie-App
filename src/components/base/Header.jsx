import { HeaderStyled, Logo } from "../../StyledComponents/NavStyled"
import { FaSearch } from "react-icons/fa"
import { IoMdArrowDropdown } from "react-icons/io"
import { Link } from 'react-router-dom';
import Search from "../Search";
import routes from "../../routes";
import { Nav, Navbar, Container, NavDropdown} from 'react-bootstrap'



function Header() {

  return (
     <HeaderStyled>

<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container className="container">
  <Navbar.Brand href="#home"><Logo src='./movielogo.png' alt='...'/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
  <ul className="row">
    {routes
              .filter((item) => item.isNav)
              .map((item, index) => (
                
                <li key={index} className="col left">
                  <Link className="left nav-link text-light" to={item.path}>
                    {item.title}
                  </Link>
                  </li>
              ))}      
           <li className="col left">
      <NavDropdown title="Movies" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Popular</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Top Rated</NavDropdown.Item>
      </NavDropdown>
      </li>
      </ul> 
    <Nav className="right">
      <Nav.Link to={<Search/>}><FaSearch /></Nav.Link>
      <img src="profilepicture.jpg" alt="" />
      <Nav.Link className="text-light" to={<Search/>}><IoMdArrowDropdown /></Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>

      </HeaderStyled>                
      
  )
}

export default Header