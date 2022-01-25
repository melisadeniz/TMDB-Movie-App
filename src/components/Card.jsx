import { CardStyled } from "../StyledComponents/CardStyled"

function Card(props) {

  const {poster_path, title, release_date} = props

    return (
      <CardStyled>
      <div>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />
          <h6 className="title text-center">{title}</h6>
          <span className="subtitle text-center">{release_date}</span> 
      </div>
      </CardStyled>
      
    )
  }
  
  export default Card