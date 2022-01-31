import { useEffect } from "react"
import { ContainerStyled } from "../styledComponents/ContainerStyled"
import { useQueries, useQuery } from 'react-query';
import { useParams } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import {  fetchMovieGenres, fetchPopularMovies } from '../data';
import { sortVal, genreFilter, removeGenreFilter, startDateFilter, endDateFilter, sortFilterResult } from '../reduxStore/movieFilter';
import { loadMoreMovies, resetLoad } from '../reduxStore/LoadMore';
import { getGenres } from '../reduxStore/movieGenres';
import { FilterButton, FilteredButton, Input, SortFilterGrid, SortFilterContainer, SelectStyled, GenreContainer } from "../styledComponents/SortFilterStyled"
import Card from "../components/Card"
import { Button } from "../styledComponents/ButtonStyled"

function SortFilter(props) {

  const dispatch = useDispatch()
  const { load, genres, sortFilter } = useSelector(state => state)
  const params = useParams() 

  const genresData = useQuery("genres", () => fetchMovieGenres, { reply: false })

  genresData?.data?.then((val) =>
    dispatch(getGenres(val?.data?.genres))
  )

  const movies = useQueries(
    load.map(page => {
      return {
        queryKey: ["movies", params?.type, page, sortFilter?.sortingValue, sortFilter?.startDate, sortFilter?.endDate, sortFilter?.filteringGenres],
        queryFn: () => fetchPopularMovies(params?.type, page, sortFilter?.sortingValue, sortFilter?.startDate, sortFilter?.endDate, sortFilter?.filteringGenres),
        retry: false,
      }
    })
  )

  useEffect(() => {
    dispatch(sortFilterResult(movies))
    dispatch(resetLoad())
  }, [])

  useEffect(() => {
    dispatch(sortFilterResult(movies))
 }, [load, params.type])



  return (
    <ContainerStyled>

    <SortFilterContainer>
      <SortFilterGrid >

        <div className="container">
      Sort by:
           <div>
          <SelectStyled onChange={(e) => dispatch(sortVal(e.target.options[e.target.selectedIndex].value))}>
            <option value="original_title.asc">Movie Title (from A to Z)</option>
            <option value="original_title.desc">Movie Title (from Z to A)</option>
            <option value="popularity.desc">Most Populars</option>
            <option value="popularity.asc">Least Populars</option>
            <option value="release_date.desc">Newest Released</option>
            <option value="release_date.asc">Oldest Released</option>
            
          </SelectStyled>
          </div>

        </div>

          <div className="container">

         Filter by:     

            Date

       <Input  onChange={(e) => dispatch(startDateFilter(e.target.value))} type="date" id="from_date" name="from_date"></Input>
       <Input  onChange={(e) => dispatch(endDateFilter(e.target.value))} type="date" id="to_date" name="to_date"></Input>

          </div>

          <GenreContainer>
          {
            genres?.filter(item => !sortFilter?.filteringGenres?.includes(item?.id)).map(item => <FilterButton onClick={() => dispatch(genreFilter(item?.id))} key={item?.id}>{item?.name}</FilterButton>)
          }
        </GenreContainer>

          <FilterButton 
        onClick={() => {
          dispatch(sortFilterResult(movies))
          dispatch(resetLoad())
        }} >
        Search
      </FilterButton>
      </SortFilterGrid>
      <div>
      {
        genres?.filter(item => sortFilter?.filteringGenres?.includes(item?.id))?.map(item => <FilteredButton>{item?.name} <span onClick={() => dispatch(removeGenreFilter(item?.id))}> X </span></FilteredButton>)
      }
    </div>
    <div>
      {
      sortFilter?.results?.map(item => <Card height={"280"} width={"180"} data={item?.data?.data?.results} />)
    }
    </div>
    <div>
      {
        (sortFilter?.results[sortFilter?.results?.length - 1]?.data !== undefined && (sortFilter?.results[0]?.data?.data?.results?.length !== 0)) && <Button
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

    </SortFilterContainer>


      </ContainerStyled>
      
 
  )
}

export default SortFilter