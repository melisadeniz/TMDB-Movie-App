import styled from "styled-components";


export const SortFilterContainer = styled.div`
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

export const SelectStyled = styled.select`
    color: #222831;
    padding: 5px 10px;
    width: 100%;
    &:hover {
        color: ${props => props.theme === "dark" ? "white" : "black"};
        background-color: ${props => props.theme === "dark" ? "#30475E" : "whitesmoke"};
        border-radius: 5px;
        transition: all 0.2s ease-out;
    }
`

export const FilterButton = styled.button`
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

export const FilteredButton = styled.button`
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

const Input = styled.input`
    border: 1px solid ${props => props.theme ==="dark" ? "#F05454" : "gray"};
    background-color: ${props => props.theme === "dark" ? "#131414" : "white"};
    color: ${props => props.theme === "dark" ? "white" : "black"};
    width: 100%;
    height: 35px;
    padding: 15px;
    border-radius: 20px;
    &:focus {
        outline: none;
        border: 1px solid ${props => props.theme ==="dark" ? "#F05454" : "gray"};
        box-shadow: inset 0 0 2px ${props => props.theme === "dark" ? "#F05454" : "black"};
    };
`

export const GenreContainer = styled.div`
    margin: 20px 0px;
    overflow: auto;
    white-space:nowrap;
    width: auto;
    height: auto;
    color: ${props => props.theme === "dark" ? "white" : "black"};
    &::-webkit-scrollbar {
        height: 11px;
    }
    &::-webkit-scrollbar-thumb {
        background: #F05454; 
        border-radius: 10px;
    }
    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 2px ${props => props.theme === "dark" ? "#F05454" : "black"}; 
        border-radius: 10px;
    }
`


export {Input}