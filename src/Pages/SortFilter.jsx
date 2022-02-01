// import React, { useEffect } from 'react';
// import { useParams } from "react-router-dom"
// import { useDispatch, useSelector } from 'react-redux';
// import { ContainerStyled } from '../styledComponents/ContainerStyled';
// import { SortFilterGrid, SortFilterContainer, } from '../styledComponents/SortFilterStyled';
// import { SelectStyled } from '../styledComponents/SortFilterStyled';

// function SortFilter() {

//   const dispatch = useDispatch()
//   const { genres, sortFilter } = useSelector(state => state)
//   const params = useParams()

// return (
//   <ContainerStyled>

//   <SortFilterContainer>
//     <SortFilterGrid >

//       <div className="container">
//     Sort by:
//          <div>
//         {/* <SelectStyled onChange={(e) => dispatch(sortVal(e.target.options[e.target.selectedIndex].value))}>
//           <option value="original_title.asc">Movie Title (from A to Z)</option>
//           <option value="original_title.desc">Movie Title (from Z to A)</option>
//           <option value="popularity.desc">Most Populars</option>
//           <option value="popularity.asc">Least Populars</option>
//           <option value="release_date.desc">Newest Released</option>
//           <option value="release_date.asc">Oldest Released</option>

//         </SelectStyled> */}
//         </div>

//       </div>
// {/*
//         <div className="container">

//        Filter by:

//           Date

//      <Input  onChange={(e) => dispatch(startDateFilter(e.target.value))} type="date" id="from_date" name="from_date"></Input>
//      <Input  onChange={(e) => dispatch(endDateFilter(e.target.value))} type="date" id="to_date" name="to_date"></Input>

//         </div>

//         <GenreContainer>
//         {
//           genres?.filter(item => !sortFilter?.filteringGenres?.includes(item?.id)).map(item => <FilterButton onClick={() => dispatch(genreFilter(item?.id))} key={item?.id}>{item?.name}</FilterButton>)
//         }
//       </GenreContainer>

//         <FilterButton
//       onClick={() => {
//         dispatch(sortFilterResult(movies))
//         dispatch(resetLoad())
//       }} >
//       Search
//     </FilterButton> */}

//     </SortFilterGrid>

//   </SortFilterContainer>

//     </ContainerStyled>

// )
// }

// export default SortFilter
