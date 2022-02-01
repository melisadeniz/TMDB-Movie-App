import { ProfileGrid } from "../styledComponents/ProfileStyled";
import { useSelector } from 'react-redux';
import { FiInstagram, FiTwitter } from "react-icons/fi";


function Profile(props) {

  const { user } = useSelector(state => state)


  return ( 
  
  <ProfileGrid>
     
        <div className="login my-5">
        <img className="m-2 border" width={"180px"} src={user.avatarUrl} alt="" />
        <div>
            <h3 className="username"> {user.username.toLowerCase()} </h3>
            <p className="join-date"> {user.joinDate} </p>
            <div>
              <a className="mx-1 " href={user.socials.instagram}>
                <FiInstagram />
              </a>
              <a className="mx-1" href={user.socials.twitter}>
                <FiTwitter />
              </a>
            </div>
          </div>
        </div>

  </ProfileGrid>
  );
}

export default Profile;
