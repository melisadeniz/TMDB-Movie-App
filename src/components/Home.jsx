// import { Button } from "../StyledComponents/ButtonStyled"
import Search from "./Search";
import { useEffect, useState } from "react";
import NotFound from "./NotFound";
import Card from "./Card";
import { useQuery } from "react-query";
import { fetchMovies } from "../data";
import { ContainerStyled } from "../StyledComponents/ContainerStyled";

function Home(props) {

  const [search, setSearch] = useState("");


  const [currentPageData, setCurrentPageData] = useState([]);


  const { isLoading, isError, error, isFetched, isFetching, data, ...query } =
    useQuery("movie", fetchMovies, {
      select: (data) => data.data.results,
      retry: false,
    });


  useEffect(() => {
    setCurrentPageData( data
    ?.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
 
  )}, [search])

  

  function handleReset() {
    setSearch("");
  }

  return (
    <>
    <ContainerStyled>
      <div className="container">
        <Search
          search={search}
          setSearch={(e) => {setSearch(e);
          console.log(e)} }
          handleReset={handleReset}
        />

        <div className="discover row m-3">
          {
            currentPageData?.map((item) => (
              <div key={item.id} className="col-sm">
                <Card
                  id={item.id}
                  poster_path={item.poster_path}
                  title={item.title}
                  release_date={item.release_date}
                />
              </div>
            ))}
          {currentPageData?.length === 0 && <NotFound />}
        </div>
      </div>

      {/* {currentPageData?.length !== 0 && (
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
        </div>
      )} */}
    </ContainerStyled>
    </>
  );
}

export default Home;
