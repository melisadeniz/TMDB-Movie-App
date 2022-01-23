import { CardStyled } from "../StyledComponents/CardStyled"

function Card(props) {

  const {backdrop_path, title, release_date} = props

    return (

      <CardStyled>
      <div className="card">
      <div className="text-center">
      <img src={`${backdrop_path}`} className="card-img-top" alt={title} height={50} width={30} />
      </div>
        <div className="card-body">
          <h6 className="card-title text-center h2">{title}</h6>
          <p className="card-subtitle mb-2 text-muted text-center">
          <strong>Release Date: </strong>{release_date}
          </p>
        </div>
      </div>
      </CardStyled>
      
    )
  }
  
  export default Card