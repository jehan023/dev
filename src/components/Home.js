/* eslint-disable react/jsx-no-comment-textnodes */
import { HashLink as Link } from 'react-router-hash-link';
export default function Home() {
  return (
    <div className="home-container">
      <div className='background-overlay'>
        <nav className="nav-items">
          <Link to="/" className="nav-item" smooth>/home</Link>
          <Link to="#expertise" className="nav-item" smooth>/expertise</Link>
          <Link to="#work" className="nav-item" smooth>/work</Link>
          <Link to="#contact" className="nav-item" smooth>/contact</Link>
        </nav>
        <div className='home-wrapper'>
          <div className="home-content">
            <h1 className='home-dev-name'>JEHAN H.</h1>
            <h5 className='home-dev-title animate__animated animate__fadeInUp'>COMPUTER ENGINEER, FULL STACK DEVELOPER</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
