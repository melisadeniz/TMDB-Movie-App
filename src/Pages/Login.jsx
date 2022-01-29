import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { validateUser } from '../reduxStore/userValidation';
import { ContainerStyled } from "../StyledComponents/ContainerStyled";
import { Button } from "../StyledComponents/ButtonStyled";

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

  // const userData = data.map( (data) => {

  return (
    <ContainerStyled>
      <div className="login my-5">
        {/* <img src={userData.avatar} alt={userData.username} /> */}
        <form className="login_form">
          <input
            type="username"
            placeholder="Username"
            value={username}  // {userData.username}
            onChange={(e) => setUsername(e.target.value)}

          />

          <input
            type="password"
            placeholder="Password"
            value={password}  // {userData.password}
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
