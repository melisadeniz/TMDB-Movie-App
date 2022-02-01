import styled from 'styled-components'
import { AiFillHeart } from "react-icons/ai";
import { BsFillBookmarkFill } from "react-icons/bs";

export const FavoriteIcon = styled(AiFillHeart)`
    font-size: 25px;
    top: 85%;
    left: 60%;
    color: ${props => props.isFav ? "#EA2027" : "gray"};
    cursor: pointer;
`

export const WatchedIcon = styled(BsFillBookmarkFill)`
    font-size: 25px;
    top: 85%;
    left: 80%;
    color: ${props => props.isSeen ? "#EA2027" : "gray"};
    cursor: pointer;
`