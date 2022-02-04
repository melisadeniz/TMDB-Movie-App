import { useQuery } from "react-query";
import { fetchReviews } from "../data";
import { useSelector } from "react-redux";
// import { DetailModal } from "../styledComponents/DetailStyled"

function Reviews({ movieId }) {
  const state = useSelector((state) => state);
  const { data } = useQuery(["reviews", movieId], () => fetchReviews(movieId), {
    retry: false,
    select: (data) => data.data.results,
  });

  return (
    <>
   
      {data
        ?.map((item, index) => (
          <div
            className={`card border-0 mb-5 ${
              state.theme ? "bg-light" : "bg-dark"
            }`}
          >
            <div
              className={`card-body ${
                state.theme ? "text-dark" : "text-light"
              }`}
            >
              <h5 className="card-title row">{item.author}</h5>
              <p className="card-text">{item.content.substring(0, 300)}...</p>
            </div>
          </div>
        ))
        .slice(0, 1)}
      
    </>
  );
}

export default Reviews;
