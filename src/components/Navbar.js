/* eslint-disable react/jsx-no-comment-textnodes */
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='header-wrap'>
      <div className="header-wrap-inner">
        <div className="nav-items right-part">
          <NavLink to="/" className="nav-item">// home</NavLink>
          <NavLink to="expertise" className="nav-item" >// expertise</NavLink>
          <NavLink to="work" className="nav-item">// work</NavLink>
          <NavLink to="contact" className="nav-item">// contact</NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar