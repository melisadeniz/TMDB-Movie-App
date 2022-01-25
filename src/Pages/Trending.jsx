import Search from "../components/Search";
import { useEffect, useState } from "react";
import NotFound from "../components/NotFound";
import CustomPagination from "../components/CustomPagination";
import Card from "../components/Card";
import { ContainerStyled } from "../StyledComponents/ContainerStyled";
import axios from "axios";

function Trending(props) {


  const API_KEY = "826a5ec798a85ea391a94fb7606095b9";

  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1); 
  const [content, setContent] = useState([]);

  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}&page=${page}`
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
    fetchTrending();
  
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
                  title={item.title || item.name}
                  date={item.first_air_date || item.release_date}
                  media_type={item.media_type}
                  vote_average={item.vote_average}
                />
              </div>
            ))}
          {content?.length === 0 && <NotFound />}
        </div>
    <CustomPagination setPage={setPage} />
   </div>
    </ContainerStyled>
    </>
  );
}

export default Trending;
