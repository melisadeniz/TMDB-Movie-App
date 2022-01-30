import { ContainerStyled } from "../StyledComponents/ContainerStyled"
import { useQueries, useQuery } from 'react-query';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../data';
import { loadMoreMovies, resetLoad } from '../reduxStore/LoadMore';

function SortFilter(props) {

  const dispatch = useDispatch()
  const { load, theme, genres, sortFilter } = useSelector(state => state)
  const params = useParams() 


  return (
    <ContainerStyled>


 
     {/* && <Button
          onClick={() => {
            dispatch(loadMoreMovies())
          }} >
          Load More
        </Button>
      }
    </div> 

    <div>
      {
        sortFilter?.results[0]?.data?.data?.results?.length === 0 && <div>No results found!</div>
      }
    </div>
 */}


       
    </ContainerStyled>
 
  )
}

export default SortFilter