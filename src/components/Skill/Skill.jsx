import "./Skill.sass";
const Skill = ({ name, picture, xp }) => {
  //The XP AKA progress bar
  return (
    <div className="skill-container">

      <div className="skill">
        <div className="skill-image">
          {
            picture && picture.map((pic) => {
              return <img src={pic}></img>
            })
          }
          
        </div>
        <h3>{name}</h3>
      </div>

      <div className="xp">
        <div style={{ width: xp }} className="xp-progress"></div>
      </div>

    </div>
  );
};

export default Skill;
