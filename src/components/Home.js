import { HashLink as Link } from 'react-router-hash-link';
export default function Home() {
  return (
    <div className="home-container">
      <div className='background-overlay'>
        <nav className="nav-items">
          <Link to="/" className="nav-item">// home</Link>
          <Link to="#expertise" className="nav-item" >// expertise</Link>
          <Link to="#work" className="nav-item">// work</Link>
          <Link to="#contact" className="nav-item">// contact</Link>
        </nav>
        <div className='home-wrapper'>
          <div className="home-content">
            <h1 className='home-dev-name'>JEHAN H.</h1>
            <h5 className='home-dev-title'>COMPUTER ENGINEER, FULL STACK DEVELOPER</h5>
          </div>
        </div>
      </div>
    </div>
  )
}
