import { ProfileGrid } from "../StyledComponents/ProfileStyled";
import { useSelector } from 'react-redux';

function Profile(props) {

  const { user} = useSelector(state => state)

  return (
    <ProfileGrid>
     
        <div className="login my-5">
        <img width={"200px"} src={user.avatarUrl} alt="" />
        <div>
            <p className="username"> {user.username.toUpperCase()} </p>
            <p className="join-date"> {user.joinDate} </p>
            {/* <ul className='list'>
              <li>  <span className='movie-counts'>{user.seenList.totalCount}</span> Seen Movies</li>
              <li>  <span className='movie-counts'>{user.favoritesList.totalCount}</span> Favorites Movies</li>
            </ul> */}
            {/* <div>
              <a href={user.socials.instagram}>
                <InstagramIcon />
              </a>
              <a href={user.socials.twitter}>
                <TwitterIcon />
              </a>
            </div> */}
          </div>
        </div>
  
  </ProfileGrid>
  );
}

export default Profile;
