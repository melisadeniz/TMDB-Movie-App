import ReactPaginate from "react-paginate";
import { useQuery } from "react-query";
import { useSelector, useDispatch } from "react-redux";
import { fetchSearchMovies } from "../data";
import { paginationHandler } from "../reduxStore/pagination";
import { CardContainer } from "../styledComponents/CardStyled";
import Card from "./Card";
import NotFound from "./NotFound";

function SearchResults() {
  const { search, pagination: currentPage } = useSelector((state) => state);
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
      <CardContainer>
        {searchData?.data
          ?.slice(currentPage, currentPage + perPage)
          .map((item) => (
            <Card item={item} />
          ))}
      </CardContainer>

      {searchData?.data?.length === 0 && <NotFound />}
      <div className="container row my-2">
        <ReactPaginate
          breakLabel="..."
          nextLabel=" >>"
          onPageChange={(e) => dispatch(paginationHandler(e.selected, perPage))}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<< "
          containerClassName={
            "list-unstyled d-flex align-items-center justify-content-center"
          }
          previousLinkClassName={
            "text-decoration-none text-dark fw-bold  mx-2 fs-5"
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
    </>
  );
}
export default SearchResults;
