// import { Button } from "../StyledComponents/ButtonStyled"
import Search from "./Search"
import { useState } from "react";
import {fetchMovies} from "../data"
import {useQuery} from "react-query"
import Card from "./Card"


function Home() {

  const [search, setSearch] = useState("");
  

  const {isLoading, isError, error, isFetched, isFetching, data, ...query } = 
  useQuery('movie', fetchMovies,
  {
    select: (data) => data.data.results, 
    retry:false
  });


  // function searchItem(item) {
  //   if (item.title.toLowerCase().includes(search.toLowerCase())) {
  //       return true
  //   }
  //   return false
  // }


function handleReset() {
  setSearch('')
}

  return (
      <>
<div className="container">
<div className="row my-3 d-flex">
      <div className="col-4">
           <Search search={search} setSearch={setSearch}/>
          </div>
    <div className="col-2">
     <button type="button" onClick={handleReset} className="btn btn-outline-secondary">Reset</button>
   </div>
  </div>

       <div className="row m-3">
          {data?.map((item) => ( <div key={item.id} className="col-sm">
                 <Card
                 backdrop_path={item.backdrop_path}
                 title={item.title}
                 id={item.id}
                 release_date={item.release_date}
                 />
             </div>))}
        </div>   
     </div>

      </>
  )
}

export default Home