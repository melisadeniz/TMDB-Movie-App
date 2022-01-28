import { CardStyled } from "../StyledComponents/CardStyled";
import { FiHeart } from "react-icons/fi";
// import { useDispatch, useSelector } from 'react-redux';

function Card(props) {
  const { id, poster, title, date, vote_average } = props;

  // const dispatch = useDispatch()

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
              <FiHeart
                // isFav={favoritesList?.includes(item.id)}
                // onClick={() => dispatch(addFavList(item.id))}
              />
            </div>
            <span className="subtitle">{date}</span>
          </span>
        </div>
      </div>
    </CardStyled>
  );
}

export default Card;
