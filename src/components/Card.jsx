import { CardStyled, LinkStyled } from "../styledComponents/CardStyled";
import { FiHeart, FiBookmark } from "react-icons/fi";
import { useDispatch, useSelector } from 'react-redux';
import { img_500, unavailable } from "../config";
import { addFavList, addSeenList } from "../reduxStore/userValidation"
// import { useDispatch } from "react-redux";

function Card(props) {

  const dispatch = useDispatch()
  const { user } = useSelector((state) => state)
  const favoriteList = user?.favoriteList?.favoriteFilms
  const seenList = user?.seenList?.seenFilms


  return (
    <>
      {props.data?.map((item) => (
        <CardStyled>
          <LinkStyled to={`/movie/${item.id}`}>
            <div key={item.id}>
              <img
                src={
                  item.poster_path
                    ? `${img_500}${item.poster_path}`
                    : unavailable
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
                  <div>
                    {user.userLogin && (
                      <div>
                        <FiHeart isFav={favoriteList?.includes(item.id)}
                        onClick={() => dispatch(addFavList(item.id))} />
                        <FiBookmark isSeen={seenList?.includes(item.id)}
                        onClick={() => dispatch(addSeenList(item.id))} />
                      </div>
                    )}
                  </div>
                  <span className="subtitle">{item.release_date}</span>
                </span>
              </div>
            </div>
          </LinkStyled>
        </CardStyled>
      ))}
    </>
  );
}

export default Card;
