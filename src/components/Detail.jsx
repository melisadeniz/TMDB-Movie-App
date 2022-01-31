import { fetchSingleMovie, fetchSingleMovieCredits } from "../data";
import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { DetailModal } from "../styledComponents/DetailStyled";
import { img_500, unavailable, unavailableLandscape } from "../config";
import { ContainerStyled } from "../styledComponents/ContainerStyled";
import { img_300, noPicture } from "../config";


function Detail() {

  const state = useSelector((state) => state);
  const { movieId } = useParams()
 
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
    <DetailModal>
      <div className="detail-background">

       <h1>.</h1>
     
      </div>

      <div className="bg-modal">

        <div className={`modal-content border-3 ${state.theme ? "bg-light" : "bg-dark"}`}>
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
              className="content-landscape"
              src={
                singleData?.backdrop_path
                  ? `${img_500}/${singleData?.backdrop_path}`
                  : unavailableLandscape
              }
              alt={singleData?.title}
            />

            <div className="content-about">
              <span className="content-title">
                <h2 className={`${
                    state.theme ? "text-dark" : "text-light"
                  }`}>{singleData?.title} </h2>
                <h4 className={`${
                    state.theme ? "text-dark" : "text-light"
                  }`}>{singleData?.release_date} </h4>
                <h6 className={`${
                    state.theme ? "text-dark" : "text-light"
                  }`}>
                  {" "}
                  {singleData?.genres.map((item) => (
                    <span> {item.name} |</span>
                  ))}
                </h6>
              </span>
              <i className={`tagline ${
                    state.theme ? "text-dark" : "text-light"
                  }`}>{singleData?.tagline}</i>
              <div className={`content-description mx-1 ${
                    state.theme ? "text-dark" : "text-light"
                  }`}><p>{singleData?.overview}</p></div>

              </div>
       
          {/* <Button
                    variant="contained"
                    startIcon={<FiYoutube />}
                    color="secondary"
                    target="__blank"
                    href={`https://www.youtube.com/watch?v=${video}`}
                  >
                    Watch the Trailer
         </Button> */}
        
            <div className="carousel">
                {
              movieCastData?.map((c) => (
            <div className="carouselItem">
              <img
                src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
                alt={c?.name}
                className="carouselItem__img"
                height={160} width={100}
              />
              <b className="carouselItem__txt">{c?.name}</b>
            </div>
          ))}
          </div>

          </div>
        </div>
      </div>
      
    </DetailModal>
    </ContainerStyled>
  );
}

export default Detail;
