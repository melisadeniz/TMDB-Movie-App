import { ContainerStyled } from "../StyledComponents/ContainerStyled"
import { useQueries, useQuery } from 'react-query';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { fetchPopularMovies } from '../data';
import { loadMoreMovies, resetLoad } from '../reduxStore/LoadMore';

function SortFilter(props) {

  const dispatch = useDispatch()
  const { } = useSelector(state => state)
  const params = useParams() 


  return (
    <ContainerStyled>


 



       
    </ContainerStyled>
 
  )
}

export default SortFilter