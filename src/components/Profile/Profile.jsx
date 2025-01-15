import ProfileImage from "../../assets/profile.jpg";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import "./Profile.sass";

const Profile = () => {

  const redirectTo = (site) => {
    return document.getElementById(site).click();
  }
  return (
    <>
      <div className="profile-container">
        <a id="linkedin" href="https://www.linkedin.com/in/rodrigo-s%C3%A1nchez-garc%C3%ADa-426b401aa/"></a>
        <div className="profile-picture">
          <img src={ProfileImage}></img>
        </div>

        <div className="profile-info">
          <h1>Rodrigo Sánchez García</h1>
          <h3>Software Engineer</h3>
          <div className="profile-socials">
            <CiLinkedin onClick={() => redirectTo('linkedin')} className="linkedin" />
            {/*<FaGithub className="github"/> */}
          </div>
        </div>

    </div>
    </>
    
  );
};

export default Profile;
