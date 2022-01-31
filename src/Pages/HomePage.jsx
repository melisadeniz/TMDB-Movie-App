import SearchButton from "../components/SearchButton";
import SearchResults from "../components/SearchResults";
import { useSelector, useDispatch } from "react-redux";
import { changeTrendValue } from "../reduxStore/trendValue";
// import NotFound from "../components/NotFound";
import Card from "../components/Card";
import { Button } from "../styledComponents/ButtonStyled";
import { ContainerStyled } from "../styledComponents/ContainerStyled";
import { useQuery } from "react-query";
import { fetchTrending, fetchDiscover } from "../data";

function HomePage() {
  const { trend, search } = useSelector((state) => state);

  const dispatch = useDispatch();

  const trendingData = useQuery(["movies", trend], () => fetchTrending(trend), {
    select: (data) => data.data.results,
    retry: false,
  });

  const discoverData = useQuery("discover movies", fetchDiscover, {
    select: (data) => data.data.results,
    retry: false,
  });

  // function handleReset() {
  //   setSearch("");
  // }

  return (
    <ContainerStyled>
      <div className="container">
      <SearchButton
      // handleReset={handleReset}
      />
    </div> 
      
      {search !== "" ? (
        <SearchResults />
      ) : (
        <>
          <div className="container">

            <div className="d-flex m-2">
              <h2>TRENDING</h2>
              <div className="btn-group ms-auto">
                <Button
                  className={`btn btn-secondary ${
                    trend === "day" ? "active" : null
                  }`}
                  onClick={() => dispatch(changeTrendValue("day"))}
                >
                  Today
                </Button>
                <Button
                  className={`btn btn-secondary ${
                    trend === "week" ? "active" : null
                  }`}
                  onClick={() => dispatch(changeTrendValue("week"))}
                >
                  Last Week
                </Button>
              </div>
            </div>

            <div className="d-flex">
              <Card data={trendingData?.data} />
            </div>

            {/* {trendingData.data?.length === 0 && <NotFound />}      */}

            <br />

            <div className="d-flex">
              <h2>DISCOVER</h2>
            </div>

            <div className="d-flex">
              <Card data={discoverData?.data} />
            </div>
            {/* {discoverData.data?.length === 0 && <NotFound />}      */}
          </div>
        </>
      )}
    </ContainerStyled>
  );
}

export default HomePage;
