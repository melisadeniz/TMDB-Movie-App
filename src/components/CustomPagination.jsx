
import ReactPaginate from "react-paginate";

function CustomPagination({ setPage, numOfPages = 10 }) {
  
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };

  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      
         <ReactPaginate
              previousLabel={"previous"}
              nextLabel={"next"}
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={numOfPages}
              onPageChange={handlePageChange}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination"}
              activeClassName={"active"}
            />
    </div>
  );
}

export default CustomPagination


