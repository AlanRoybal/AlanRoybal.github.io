import './projects.css'
import React from 'react'
import project1 from '../../assets/degree.svg'
import project2 from '../../assets/degree.svg'
import project3 from '../../assets/degree.svg'

const Projects = () => {
  return (
    <section id="projects">
        <h2 className="projectsTitle">My Projects</h2>
        <span className="projectsDesc">yap session</span>
        <div className="projectsImgs">
          <img src={project1} alt="" className="projectsImg" />
          <img src={project2} alt="" className="projectsImg" />
          <img src={project3} alt="" className="projectsImg" />
        </div>
        <button className="projectBtn">See More</button>
    </section>
  )
}

export default Projects