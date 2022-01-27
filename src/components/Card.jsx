import { CardStyled } from "../StyledComponents/CardStyled"

function Card(props) {

  const {poster, title, date, vote_average} = props

    return (
      <CardStyled>
      <div>
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
      <div className="cardtitle">
          <b className="title">{title}</b>
          <span className="subtitle">
          {vote_average}
          <span className="subtitle">{date}</span> 
          </span>
      </div>
      </div>
      </CardStyled>
      
    )
  }
  
  export default Card
