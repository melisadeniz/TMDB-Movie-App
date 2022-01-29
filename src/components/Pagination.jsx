import ReactPaginate from "react-paginate";
import { sliderHandler } from "../reduxStore/Slider";
import { useDispatch } from "react-redux";

function Pagination({ data }) {

  const dispatch = useDispatch();
  const perPage = 4;
  let pageCount;

  if (data.isFetched) {
    pageCount = Math.ceil(data.length / perPage);
  }

  return (
    <>
        <ReactPaginate
          breakLabel="..."
          nextLabel=">>"
          onPageChange={(e) => dispatch(sliderHandler(e.selected, perPage))}
          pageRangeDisplayed={3}
          pageCount={pageCount}
          previousLabel="<<"
          containerClassName={
            "list-unstyled d-flex align-items-center justify-content-center"
          }
          previousLinkClassName={
            "text-dark fw-bold text-decoration-none mx-2 fs-5"
          }
          nextLinkClassName={
            "text-dark fw-bold text-decoration-none mx-2 fs-5"
          }
          disabledLinkClassName={"text-muted"}
          pageLinkClassName={
            "text-decoration-none mx-1 text-secondary p-2 align-middle"
          }
          activeLinkClassName={"fw-bold fs-4 text-dark p-2 align-middle"}
          initialPage={0}
        />
      ;
    </>
  );
}
export default Pagination;