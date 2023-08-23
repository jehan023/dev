import { FiLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import Logo2048 from '../images/2048-logo.png';
import LogoOJT from '../images/ojt-logo.png';
import LogoTribe from '../images/tribe-logo.png';
import LogoGalampon from '../images/galampon-logo.png';
import LogoBiliPC from '../images/bilipc-logo.png';


export default function ProjectCard(props) {
  const data = props.project;

  const ProjectImg = (logo) => {
    switch (logo) {
      case 'LogoOJT': return <img src={LogoOJT} alt="project-logo" />
      case 'LogoGalampon': return <img src={LogoGalampon} alt="project-logo" />
      case 'Logo2048': return <img src={Logo2048} alt="project-logo" />
      case 'LogoTribe': return <img src={LogoTribe} alt="project-logo" />
      case 'LogoBiliPC': return <img src={LogoBiliPC} alt="project-logo" />
      default: return <h6>No Logo</h6>
    }
  }

  const TechStack = (tech) => {
    return tech.map((item, index) =>  <div className="tech-stack-item" key={index}>{item}</div> )
  }

  return (
    <div className="project-card-wrapper hidden">
      {/** Card Upper part */}
      <div className="card-upper">
        <div className="project-item-logo">
          {ProjectImg(data.logo)}
        </div>
      </div>
      {/** Card Lower part */}
      <div className="card-lower">
        <div className="card-title">
          <h3 className="project-item-headline title">{data.name}</h3>
          <div className="project-item-icons">
            {data.demo !== "" ?
              <a href={data.demo} target="_blank" rel="noreferrer">
                <FiLink className="icon-link" />
              </a>
              : ""}

            {data.github !== "" ?
              <a href={data.github} target="_blank" rel="noreferrer">
                <BsGithub className="icon-github" />
              </a>
              : ""}
          </div>
        </div>
        <div className="project-type">
          {data.type}
        </div>
        <div className="project-tech-stack">
          {TechStack(data.tech)}
        </div>
      </div>
    </div>
  )
}
