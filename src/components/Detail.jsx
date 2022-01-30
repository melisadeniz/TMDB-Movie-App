import { fetchSingleMovie, fetchSingleMovieCredits } from "../data";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { DetailModal } from "../StyledComponents/DetailStyled";
import { img_500, unavailable, unavailableLandscape } from "../config";

import { ContainerStyled } from "../StyledComponents/ContainerStyled";

function Detail(props) {
  const { movieId } = useParams();

  const singleMovieData = useQuery(
    ["movie", movieId],
    () => fetchSingleMovie(movieId),
    {
      retry: false,
    }
  );

  const movieCreditsQuery = useQuery(["moviecredits", movieId], () => fetchSingleMovieCredits(movieId), { retry: false })

  const singleData = singleMovieData?.data?.data;
  const movieCastData = movieCreditsQuery?.data?.data?.cast;

  return (
    <ContainerStyled>
    <div className="back" >
    <DetailModal>
      
      <div className="bg-modal">



        <div className="modal-content border-3">
          <Link className="close text-decoration-none" to="/">
            +
          </Link>

          <div className="content-modal">
            <img
              className="content-portrait"
              src={
                singleData?.poster_path === null
                  ? unavailable
                  : `${img_500}${singleData?.poster_path}`
              }
              alt={singleData?.title}
            />

            <img
              className="content-landscape mx-3 my-1"
              src={
                singleData?.backdrop_path
                  ? `${img_500}/${singleData?.backdrop_path}`
                  : unavailableLandscape
              }
              alt={singleData?.title}
            />

            <div className="content-about">
              <span className="content-title">
                <h2>{singleData?.title} </h2>
                <h4>{singleData?.release_date} </h4>
                <h6>
                  {" "}
                  {singleData?.genres.map((item) => (
                    <span> {item.name} |</span>
                  ))}
                </h6>
              </span>
              <i className="tagline">{singleData?.tagline}</i>
              <h6 className="content-description mx-1">{singleData?.overview}</h6>
              {/* <div>
         <Carousel id={singleData?.id} media_type={singleData?.media_type} />
        </div> */}
            </div>
          </div>
        </div>
      </div>
      
    </DetailModal>

    </div>
    </ContainerStyled>
  );
}

export default Detail;
