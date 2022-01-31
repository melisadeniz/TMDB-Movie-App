import { ContainerStyled } from "../styledComponents/ContainerStyled";

function NotFound(props) {
  return (
    <>
      <ContainerStyled>
        <div className="offset-5 my-5">
          <div className="login my-5">
            <h1>404 - Not Found!</h1>
          </div>
        </div>
      </ContainerStyled>
    </>
  );
}

export default NotFound;
