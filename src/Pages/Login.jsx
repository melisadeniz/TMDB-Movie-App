import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateUser } from '../reduxStore/userValidation';
import { ContainerStyled } from "../styledComponents/ContainerStyled";
import { Button } from "../styledComponents/ButtonStyled";

function Login(props) {
 
  const { user } = useSelector(state => state)
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()
  const dispatch = useDispatch()
  


  useEffect(() => {
    if (user.userLogin) {
      (navigate("/profile"))
    }
  }, [user, navigate])


  return (
    <ContainerStyled>
      <div className="login my-5">
        <form className="login_form">
          <input
            type="username"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}

          />

          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" className="submit_btn m-2" onClick={() => {
            dispatch(validateUser(username, password))}}>
            Login
          </Button>
        </form>
      </div>
    </ContainerStyled>
   );
//  })
}

export default Login;
