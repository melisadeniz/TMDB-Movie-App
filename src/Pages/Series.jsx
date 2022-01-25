import { useEffect, useState } from "react";
// import { useQuery } from "react-query"
import NotFound from "../components/NotFound";
import Card from "../components/Card";
import Search from "../components/Search"
import axios from "axios";
// import { fetchSeries } from "../data"
import { ContainerStyled } from "../StyledComponents/ContainerStyled";

function Series() {

  const API_KEY = "826a5ec798a85ea391a94fb7606095b9";

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1); 
  const [content, setContent] = useState([]);

  const fetchSeries = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&page=1`
    );

    setContent(data.results);
  };

  // const fetchMovies = () => BASE_AXIOS.get(`/trending/all/day?api_key=${API_KEY}&page=${page}`);

  // const { isLoading, isError, error, isFetched, isFetching, data, ...query } =
  //   useQuery("movie", fetchMovies, {
  //     select: (data) => data.data.results,
  //     retry: false,
  //   });
  


  useEffect(() => {
    setContent( content
    ?.filter((item) => item.title.toLowerCase().includes(search.toLowerCase()))
 
  )}, [search]);


  useEffect(() => {
    window.scroll(0, 0);
    fetchSeries();
  
  }, [page]);
  

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
            content?.map((item) => (
              <div key={item.id} className="col-sm">
                <Card
                  id={item.id}
                  poster={item.poster_path}
                  title={item.title}
                  media_type="TV Series"
                  date={item.release_date}
                />
              </div>
            ))}
          {content?.length === 0 && <NotFound />}
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

export default Series