import { ProfileGrid } from "../styledComponents/ProfileStyled";
import { useSelector } from "react-redux";
import { FiInstagram, FiTwitter } from "react-icons/fi";

function Profile(props) {
  const { user, favorite, seen } = useSelector((state) => state);


  return (
    <ProfileGrid>
      <div className="row">
        <div className="col-6">
          <img className="border" width={"180px"} src={user.avatarUrl} alt="" />

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
        <div className="col-6 mt-3">
          <ul className="favseen-list">
            <li>
              {" "}
              <b>Seen List:</b> {seen.count}
            </li>
            <li>
              {" "}
              <b>Favorite List:</b> {favorite.count}
            </li>
          </ul>
        </div>
        <div className="row">
                    <select
                        className="form-select my-3"
                        aria-label="Default select example"
                        // onChange={(e) =>
                        //     setSort(e.target.options[e.target.selectedIndex].value)
                        // }
                    >
                        <option value="all">all</option>
                        <option value="date">closest release date</option>
                        <option value="fav">favorites</option>
                        <option value="seen">seen</option>
                    </select>
                </div>
      </div>
    </ProfileGrid>
  );
}

export default Profile;
