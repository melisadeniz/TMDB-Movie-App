import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { fetchRecommendationMovies } from "../data";
import { img_500 } from "../config";
// import { useSelector } from "react-redux";

function Recommendation({ movieId }) {
  const { data } = useQuery(
    ["recommendation", movieId],
    () => fetchRecommendationMovies(movieId),
    {
      retry: false,
      select: (data) => data.data.results,
    }
  );

  return (
    <>
      {data
        ?.map((item) => (
          <div key={item.id} className="col-sm-3 mt-5">
            <div className="card ">
              <Link
                to={`movie/${item.id}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <img
                  className="card-img-top w-100"
                  src={`${img_500}${item.poster_path}`}
                  alt="..."
                />
                <div className="card-body">
                  <p className="card-text">{item.title}</p>
                </div>
              </Link>
            </div>
          </div>
        ))
        .slice(0, 3)}
    </>
  );
}

export default Recommendation;
