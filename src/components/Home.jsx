// import { CardStyled } from "../StyledComponents/CardStyled"
// import { Button } from "../StyledComponents/ButtonStyled"
import {fetchMovies} from "../data"
import {useQuery} from "react-query"



function Home() {

  const {isLoading, isError, error, isFetched, isFetching, data, ...query } = 
  useQuery('movie', fetchMovies,
  {
    select: (data) => data.data.results, 
    retry:false
  });
  

  return (
      <>
        {
         data?.map((item) => <h1 key={item.id}>{item.title}</h1> )
        }
      </>
  )
}

export default Home