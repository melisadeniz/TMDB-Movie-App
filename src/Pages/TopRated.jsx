import { useQuery } from "react-query";
import {  fetchTopRatedMovies } from "../data";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import SortFilter from "../components/SortFilter";
import Card from "../components/Card";

function TopRated(props){
  const [size, setSize] = useState(3);
  const {filteredData} = useSelector((state) => state);
  const { data } = useQuery(["toprated movies"], () => fetchTopRatedMovies(), {
    retry: false,
    select: (data) => data.data.results,
  });


  useEffect(() => {
    setSize(3)
  }, [data])

  function loadMoreMovies() {
    if (data.length > size) {
      setSize(size + 3);
    }
  }

  if(filteredData[0]?.results?.length > 0) {
    
    return(
      <div className="container">
        <div className="row">
          <div className="col-sm-3 mt-5">
            <SortFilter />
          </div>
          <div className="col">
            <div className="row">
              <h1 className='text-center mt-5' >Top Rated Movies</h1>
              {
                filteredData[0]?.results?.map((item,index) =>
                  (
                    <div key={index} className="col-sm-4">
                      <Card item={item} />
                    </div>
                  )
                ).slice(0,size)
              }
            </div>
            <button className="btn btn-danger m-3" onClick={loadMoreMovies} >Load More</button>
          </div>
        </div>
      </div>
    );
  }
  return(
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-3 mt-5 mx-3">
            <SortFilter />
          </div>
          <div className="col mt-5">
            <div className="row">
              <h1 className='text-center mt-5'>Top Rated Movies</h1>
              {
                data?.map((item,index) => 
                (
                  <div key={index} className="col-sm-4 mt-5">
                    <Card item={item} />
                  </div>
                )).slice(0,size)
              }
            </div>
            <button className="btn btn-secondary m-3" onClick={loadMoreMovies} >Load More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopRated;