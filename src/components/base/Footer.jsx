import { FooterStyled } from "../../StyledComponents/FooterStyled"
import { Link } from 'react-router-dom';
import routes from '../../routes';
import { BsLinkedin, BsGithub } from "react-icons/bs"



function Footer() {
  return (

 <FooterStyled>
 
   <div className="footer">
          <ul className="footer mx-5">
            {routes
              .filter((item) => item.isFooter)
              .map((item, index) => (
                <li className="footer-item" key={index}>
                  <Link className="footer-item nav-link text-light text-end" to={item.path}>
                    {item.title}
                  </Link>
                </li>
              ))}
              <li className="footer-item text-center">
              <a
            className="btn btn-primary m-1"
            style={{ backgroundColor: "#0082ca" }}
            href="https://www.linkedin.com/in/melisa-deniz"
            target='blank'
            role="button"
            ><BsLinkedin /></a>

          <a
            className="btn btn-secondary m-1"
            style={{ backgroundColor: "#333333" }}
            href="https://github.com/melisadeniz"
            target='blank'
            role="button"
          ><BsGithub /></a>
              </li>
              <li>
          <p className="text-center">© 2022 Copyright Melisa DENIZ</p>
              </li>
     
          </ul>
          
        </div>
        
 </FooterStyled>
  )
}

export default Footer