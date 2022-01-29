import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchMovies } from "../data";
import { sliderHandler } from "../reduxStore/Slider";
import Card from "./Card";

function SearchResults() {
  const { search, slider: currentPage } = useSelector((state) => state);
  const dispatch = useDispatch();
  const perPage = 4;
  let pageCount;

  const searchData = useQuery(
    ["search movies", search],
    () => fetchSearchMovies(search),
    { select: (data) => data.data.results, retry: false }
  );

  if (searchData.isFetched) {
    pageCount = Math.ceil(searchData.data.length / perPage);
  }

  return (
    <>
      <div className="container text-center my-2">
        <Card
          data={searchData?.data?.slice(currentPage, currentPage + perPage)}
        />
        {searchData?.data?.length === 0 && (
          <div
            className="alert alert-danger fw-bold fs-3 col-6 mx-auto text-center py-5 mt-5"
            role="alert"
          >
            404 - Not Found!
          </div>
        )}
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >>"
          onPageChange={(e) => dispatch(sliderHandler(e.selected, perPage))}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<< "
          containerClassName={
            "list-unstyled d-flex align-items-center justify-content-center"
          }
          previousLinkClassName={
            "text-dark fw-bold text-decoration-none mx-2 fs-5"
          }
          nextLinkClassName={"text-dark fw-bold text-decoration-none mx-2 fs-5"}
          disabledLinkClassName={"text-muted"}
          pageLinkClassName={
            "text-decoration-none mx-1 text-secondary p-2 align-middle"
          }
          activeLinkClassName={"fw-bold fs-4 text-dark p-2 align-middle"}
          initialPage={0}
        />
      </div>
      ;
    </>
  );
}
export default SearchResults;