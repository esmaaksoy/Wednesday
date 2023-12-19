import Project1 from "../../assets/img/project-1.jpg"
import Project2 from "../../assets/img/project-2.jpg"
import Project3 from "../../assets/img/project-3.jpg"
import Project4 from "../../assets/img/project-4.jpg"
import Project5 from "../../assets/img/project-5.jpg"
import Project6 from "../../assets/img/project-6.jpg"

const Projects = () => {
  return (
    <>
  <div >
    <div className="projects__bio-image">
      <h1>My Projects</h1>
    </div>
  </div>
  {/* PROJECT MAIN */}
  <main className="projects">
    <div className="projects__items">
      <div className="projects__item">
        <img src={Project1} alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={Project2} alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={Project3} alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={Project4} alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={Project5} alt="My Project" />
      </div>
      <div className="projects__item">
        <img src={Project6} alt="My Project" />
      </div>
    </div>
  </main>
 
</>

  )
}

export default Projects