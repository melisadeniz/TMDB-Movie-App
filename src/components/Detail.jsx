import { fetchSingleMovie } from '../data';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import { ContainerStyled } from "../StyledComponents/ContainerStyled"

function Detail(props) {

  const {movieId} = useParams()

  const movieQuery = useQuery(["movie", movieId], () => fetchSingleMovie(movieId), {retry: false})

  const singleMovieData = movieQuery?.data?.data

  return (
    <ContainerStyled>
   
    </ContainerStyled>
  )
}

export default Detail