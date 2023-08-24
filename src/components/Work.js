import { useEffect } from 'react';
import Arrow from '../images/right-side-arrow.png';
import data from '../data/projects-info.json';
import ProjectCard from './ProjectCard';
import SinagMockUp from '../images/SinagMockUp.gif';

export default function Work() {
  const cards = (work) => {
    return (
      work.map((project, index) => project.name !== "Sinag" ? <ProjectCard project={project} key={index} /> : "")
    )
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if(entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    },{
      threshold: 0.5
    });
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
  }, [])


  return (
    <div className="work-container" id="work">
      <div className="section-container">
        <div className="section-content left">
          <h2 className="section-heading-title hidden">My<br />Work</h2>
          <div className="section-content-desc hidden">
            Developed a solar street light monitoring system that seamlessly integrates sensor modules, microcontrollers, and transceivers. Implemented an application portal using React, complete with integrated anomaly detection for advanced data analysis and visualization capabilities.
          </div>
        </div>

        <div className="section-content right prototype-section hidden">
          <div className="prototype-image-wrapper">
            <img src={SinagMockUp} alt='mock-up' className='prototype-image'/>
          </div>
          <div className="section-space"></div>
          <div className="section-arrow">
            <img src={Arrow} alt="arrow" />
          </div>
          <h5 className="section-subheading-title">Featured Project</h5>
          <h4 className="section-subheading-title app-name">Sinag App</h4>
          <a href="https://www.projectsinag.com/" target="_blank" rel="noreferrer">
            <button className="section-button">View Project</button>
          </a>
        </div>
      </div>

      {/** Other Projects */}
      <div className='section-project-cards-container'>
        {cards(data)}
      </div>
    </div>
  )
}