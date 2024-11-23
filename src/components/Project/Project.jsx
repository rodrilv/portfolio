import './Project.sass'

const Project = ({picture, title, description}) => {
  return (
    <div className='project-container'>
      <img src={picture}></img>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}

export default Project;
