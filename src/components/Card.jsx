import { CardStyled } from "../StyledComponents/CardStyled";
import { FiHeart } from "react-icons/fi";

function Card(props) {
  const { poster, title, date, vote_average } = props;

  return (
    <CardStyled>
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${poster}`} alt={title} />
        <div className="cardtitle">
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary">
            {vote_average}
          </span>
          <b className="title">{title}</b>
          <span className="subtitle">
            <div>
              <FiHeart />
            </div>
            <span className="subtitle">{date}</span>
          </span>
        </div>
      </div>
    </CardStyled>
  );
}

export default Card;
