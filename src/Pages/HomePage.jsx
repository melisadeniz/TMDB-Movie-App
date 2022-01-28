import Search from "../components/Search";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeTrendValue } from "../reduxStore/trendValue";
import NotFound from "../components/NotFound";
import Card from "../components/Card";
import { Button } from "../StyledComponents/ButtonStyled";
import { ContainerStyled } from "../StyledComponents/ContainerStyled";
import { useQuery } from "react-query";
import { fetchTrending } from "../data";

function HomePage() {
  const { trend } = useSelector((state) => state);
  const [search, setSearch] = useState("");
  // const [page, setPage] = useState(1);
  const dispatch = useDispatch();


  const { isLoading, isError, error, isFetched, isFetching, data, ...query } =
    useQuery(["movies", trend], () => fetchTrending(trend), {
      select: (data) => data.data.results,
      retry: false,
    });

  useEffect(() => {
      data?.filter((item) =>
        item.title.toLowerCase().includes(search.toLowerCase())
      ,
      console.log(data)
    );
  }, [search]);

  function handleReset() {
    setSearch("");
  }

  // useEffect(() => {
  //   window.scroll(0, 0);
  //   fetchTrending();
  // }, [page]);

  
  // const handlePageChange = (page) => {
  //   setPage(page);
  //   window.scroll(0, 0);
  // };

  return (
    <>
      <ContainerStyled>
        <div className="container">
          <Search
            search={search}
            setSearch={(e) => {
              setSearch(e);
              console.log(e);
            }}
            handleReset={handleReset}
          />

          <div className="d-flex">
            <h2>Trending Movies</h2>
            
            <div className="btn-group ms-auto">
              <Button
                className={`btn btn-secondary ${trend === "day" ? "active" : null}`}
                onClick={() => dispatch(changeTrendValue("day"))}
              >
                Today
              </Button>
              <Button
                className={`btn btn-secondary ${trend === "week" ? "active" : null}`}
                onClick={() => dispatch(changeTrendValue("week"))}
              >
                Last Week
              </Button>
            </div>
          </div>

          <div className="discover row m-3">
            {data?.map((item) => (
              <div key={item.id} className="col-sm">
                <Card
                  id={item.id}
                  poster={item.poster_path}
                  title={item.title}
                  date={item.release_date}
                  vote_average={item.vote_average}
                />
              </div>
            ))}
            {data?.length === 0 && <NotFound />}
            <div
              style={{
                width: "100%",
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
             </div>
          </div>
        </div>
      </ContainerStyled>
    </>
  );
}

export default HomePage;
