import { ProfileGrid } from "../styledComponents/ProfileStyled";
import { useSelector } from 'react-redux';
import { FiInstagram, FiTwitter } from "react-icons/fi";


function Profile(props) {

  const { user } = useSelector(state => state)


  return ( 
  
  <ProfileGrid>
     
        <div className="login my-5">
        <img width={"200px"} src={user.avatarUrl} alt="" />
        <div>
            <p className="username"> {user.username.toLowerCase()} </p>
            <p className="join-date"> {user.joinDate} </p>
             {/* <ul className='list'>
              <li>  <span className='movie-counts'>{user.seenList.totalCount}</span> Seen Movies</li>
              <li>  <span className='movie-counts'>{user.favoriteList.totalCount}</span> Favorites Movies</li>
            </ul>  */}
            <div>
              <a href={user.socials.instagram}>
                <FiInstagram />
              </a>
              <a href={user.socials.twitter}>
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

  </ProfileGrid>
  );
}

export default Profile;
