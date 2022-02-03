import { useDispatch, useSelector } from "react-redux";
import {AiFillHeart,AiOutlineHeart } from "react-icons/ai";
import {BsFillBookmarkFill, BsBookmark} from 'react-icons/bs';
import { addFavorite, removeFavorite } from "../reduxStore/FavMovies";
import { addSeen, removeSeen } from "../reduxStore/SeenMovies";

export default function FavoriteSeen ({item}) {
    const dispatch = useDispatch();
    const { favorite, seen} = useSelector((state) => state);

    const isFav = favorite?.films?.some((fav) => fav.id === item.id)
  
    const isSeen = seen?.films?.some((seen) => seen.id === item.id)


    return (
        <>
            {
              isFav 
              ? <AiFillHeart onClick={() => dispatch(removeFavorite(item.id))} />
              : <AiOutlineHeart onClick={() => dispatch(addFavorite(item.id, item.title, item.poster_path, item.release_date, item.genre_ids))} />
            }
            {
              isSeen 
              ? <BsFillBookmarkFill onClick={() => dispatch(removeSeen(item.id))} /> 
              : <BsBookmark onClick={() => dispatch(addSeen(item.id, item.title, item.poster_path, item.release_date, item.genre_ids))} />
            }
        </>
    )
 }