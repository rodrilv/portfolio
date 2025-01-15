import { Profile, Project, Skill } from "./components";
import { Skills, Projects } from "./features";
import "animate.css";
import "./App.sass";

function App() {
  return (
    <>
      <div>
        <div className="header">
          <div className="animate__animated animate__fadeInTopLeft">
            <div className="header-border">
              <Profile />
            </div>
          </div>
        </div>

        <div className="segment">
          <h1>ABOUT MY CAREER</h1>
        </div>

        <div className="head">
          <div className="head-title">
            <h2>
              <b>"Now I'm become </b>
              <i>code</i>
              <b>, the destroyer of frameworks"</b>
              <i style={{ color: "#ffff" }}> - From the Bhagavad Codita</i>😜
            </h2>
          </div>

          <div className="head-description">
            <p>
              ¡Hi, I'm Rodrigo, you can call me Roy. I am a Software Engineer
              who graduated with honours at Universidad Tecnológica de
              Aguascalientes. I'm a software specialist with
            </p>
            <i style={{ fontSize: 18 }}>
              4 years of experience<b className="cursor">|</b>
            </i>
            <p>
              I've been enrolled in several companies offering technological
              solutions such as:
            </p>
          </div>
          <div className="head-list">
            <ul>
              <li>CRM Systems</li>
              <li>Mobile Apps</li>
              <li>
                Project administration with <i>Jenkins</i>{" "}
              </li>
              <li>
                <i>Monolith</i> and <i>Microservices</i> Architectures
              </li>
              <li>
                <i>DevOps</i>
              </li>
              <li>
                Data Analysis with <i>SQL</i>
              </li>
              <li>Interactive Sites</li>
              <li>
                APIs with <i>Express</i> and <i>Flask</i>
              </li>
            </ul>
          </div>
        </div>

        <div className="body">
          <div className="segment">
            <h1>SKILLSET</h1>
          </div>

          <div className="body-skills">
            {Skills.map((skill, index) => {
              return (
                <div key={index} className="skill-border">
                  <Skill picture={skill.icon} name={skill.name} xp={skill.xp} />
                </div>
              );
            })}
          </div>

          <div className="segment">
            <h1>PROJECTS</h1>
          </div>

          <div className="body-projects">
            {Projects.map((project, index) => {
              return (
                <div key={index}>
                  <Project
                    picture={project.image}
                    title={project.title}
                    description={project.description}
                    target={project.ref}
                  />
                </div>
              );
            })}
          </div>

          <div></div>
        </div>
      </div>
    </>
  );
}

export default App;
