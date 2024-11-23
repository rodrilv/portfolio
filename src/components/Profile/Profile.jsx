import ProfileImage from "../../assets/profile.jpg";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "./Profile.sass";

const Profile = () => {
  return (
    <>
      <div className="profile-container">

        <div className="profile-picture">
          <img src={ProfileImage}></img>
        </div>

        <div className="profile-info">
          <h1>Rodrigo Sánchez García</h1>
          <h3>Software Engineer</h3>
          <div className="profile-socials">
            <CiLinkedin className="linkedin" />
            <FaGithub className="github" />
          </div>
        </div>

    </div>
    </>
    
  );
};

export default Profile;
