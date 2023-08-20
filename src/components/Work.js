import Arrow from '../images/right-side-arrow.png';

export default function Work() {
  return (
    <div className="work-container" id="work">
      <div className="section-container">
        <div className="section-content left">
          <h2 className="section-heading-title">My<br />Work</h2>
          <div className="section-content-desc">
            Deployed scalable travel, event and telemedicine web and hybrid mobile apps using React SPA and PWA.
            Collaborated in 140+ projects with 50+ clients all around the world. I am also interested in data analytics and visualization.
          </div>
        </div>

        <div className="section-content right prototype-section">
          <div className="section-space"></div>
          <div className="section-arrow">
            <img src={Arrow} alt="arrow" />
          </div>
          <h5 className="section-subheading-title">Featured Project</h5>
          <h4 className="section-subheading-title app-name">Sinag App</h4>
          <button className="section-button">View Project</button>
        </div>
      </div>

      <div className='project-cards-section'>
        
      </div>
    </div>
  )
}
