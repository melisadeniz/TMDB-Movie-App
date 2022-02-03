import { CardStyled, LinkStyled } from "../styledComponents/CardStyled";
import { img_500, unavailable } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";

import { addFavorite, removeFavorite } from "../reduxStore/FavMovies";
import { addSeen, removeSeen } from "../reduxStore/SeenMovies";

function Card({ item }) {
  const dispatch = useDispatch();

  const { seen, favorite } = useSelector((state) => state);

  const isFav = favorite?.films?.some((fav) => fav.id === item.id);

  const isSeen = seen?.films?.some((seen) => seen.id === item.id);

  return (
    <>
      <CardStyled>
        <LinkStyled to={`/movie/${item.id}`}>
          <div key={item.id}>
            <img
              src={
                item.poster_path ? `${img_500}${item.poster_path}` : unavailable
              }
              alt={item.title}
            />
            <div className="cardtitle">
              <span
                className={`position-absolute top-0 start-100 translate-middle badge rounded-pill bg-primary ${
                  item.vote_average > 6 ? "bg-primary" : "bg-danger"
                }`}
              >
                {item.vote_average}
              </span>
              <b className="title">{item.title}</b>
              <span className="subtitle">
                <div></div>
                <span className="subtitle">{item.release_date}</span>
              </span>
            </div>
          </div>
        </LinkStyled>
        <div>
          {isFav ? (
            <AiFillHeart onClick={() => dispatch(removeFavorite(item.id))} />
          ) : (
            <AiOutlineHeart
              onClick={() =>
                dispatch(
                  addFavorite(
                    item.id,
                    item.title,
                    item.poster_path,
                    item.release_date
                  )
                )
              }
            />
          )}

          {isSeen ? (
            <BsFillBookmarkFill onClick={() => dispatch(removeSeen(item.id))} />
          ) : (
            <BsBookmark
              onClick={() =>
                dispatch(
                  addSeen(
                    item.id,
                    item.title,
                    item.poster_path,
                    item.release_date
                  )
                )
              }
            />
          )}
        </div>
      </CardStyled>
    </>
  );
}

export default Card;
