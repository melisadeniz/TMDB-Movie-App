import { useState } from "react";
import { ContainerStyled } from "../StyledComponents/ContainerStyled";
import { Button } from "../StyledComponents/ButtonStyled";

function Login(props) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <ContainerStyled>
      <div className="offset-5 my-5">
        <div className="login my-5">
          <form className="login_form">
            <input
              type="username"
              placeholder="Username"
              value={username}
              onChange={(e) => setUserName(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type="submit" className="submit_btn m-2">
              Login
            </Button>
          </form>
        </div>
      </div>
    </ContainerStyled>
  );
}

export default Login;
