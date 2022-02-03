import styled from "styled-components";


export const SortFilterMainContainer = styled.div`
    text-align:center;
`

export const SortFilterGrid = styled.div`
    display: grid;
    grid-template-columns: 30% 60% auto;
    padding: 10px 7%;
    top: 0;
    z-index: 999;
    @media only screen and (max-width: 960px) {
        grid-template-columns: 100%;
    }
`

export const GridContainer = styled.div`
    background: ${props => props.theme === "dark" ? "#222831" : "#DDDDDD"};
    border: 1px solid ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    padding: 20px;
    text-align: center;
`

export const FilterDateContainer = styled.div`
    display: grid;
    grid-gap: 10px 10px;
    grid-template-columns: auto auto auto;
    align-items: center;
    margin: 8px 0;
`

export const FilterButtons = styled.button`
    background: ${props => props.theme === "dark" ? "#DDDDDD" : "#222831"};
    color: ${props => props.theme === "dark" ? "#222831" : "#DDDDDD"};
    padding: 5px 10px;
    outline: none;
    border: 0px;
    margin: 5px;
    border-radius: 5px;
    &:hover {
        background: ${props => props.theme === "dark" ? "rgb(221, 221, 221, 0.7)" : "rgb(34, 40, 49, 0.7)"};
    }
`

export const FilteredButtons = styled.button`
background: ${props => props.theme === "dark" ? "rgb(221, 221, 221, 0.7)" : "rgb(34, 40, 49, 0.7)"};
    color: ${props => props.theme === "dark" ? "#222831" : "#DDDDDD"};
    padding: 5px 10px;
    outline: none;
    font-size: 13px;
    border: 0px;
    margin: 5px;
    border-radius: 5px;
    & > span {
        font-size: 15px;
        padding-left: 7px;
        &:hover {
            color: whitesmoke;
        }
    }
`

export const SortFilterTitle = styled.h5`
    margin-bottom: 20px;
    text-align: start;
`