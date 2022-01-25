import { CardStyled } from "../StyledComponents/CardStyled"

function Card(props) {

  const {poster, title, date, media_type} = props

    return (
      <CardStyled>
      <div>
      <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
          <b className="title text-center">{title}</b>
          <span className="subtitle">
          {media_type === "tv" ? "TV Series" : "Movie"}
          <span className="subtitle">{date}</span> 
          </span>
      </div>
      </CardStyled>
      
    )
  }
  
  export default Card