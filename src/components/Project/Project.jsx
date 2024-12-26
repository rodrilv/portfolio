import './Project.sass'

const Project = ({picture, title, description, target}) => {
  
  return (
    <div onClick={() => document.getElementById(title).click()} className='project-container'>
      <img src={picture}></img>
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={target} id={title} target='_blank'></a>
    </div>
  )
}

export default Project;
