import { CardStyled, LinkStyled } from "../styledComponents/CardStyled";
import { img_500, unavailable } from "../config";
// import { useSelector } from 'react-redux';

function Card(props) {

// const state = useSelector((state) => state)
 

  return (
    <>
      {props.data?.map((item) => (
        <CardStyled key={item.id}>
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
