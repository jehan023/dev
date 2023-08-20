import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import HelloWord from '../images/hello-world-html-code.png';

export default function Expertise() {
  return (
    <div className="expertise-container" id="expertise">
      <h2 className="container-heading-title">My Expertise</h2>

      <section className="expertise-section">
        <div className="expertise-section-box">
          <div className="section-header">
            <HiOutlineComputerDesktop className='icon-box-icon' />
            <h5 className='icon-box-title'><span class="chonky-underline-megenta">Software</span><br />Development</h5>
          </div>
          <div className='section-box-content'>
            <div className='section-box-desc'>
              Experienced in both functional and OOP: C#, Python, Java, JavaScript, TypeScript.
            </div>
          </div>
        </div>

        <div className="expertise-section-box">
          <div className="section-header">
            <FaReact className='icon-box-icon' />
            <h5 className='icon-box-title'><span class="chonky-underline-blue">Frontend Dev</span><br />React, NextJS</h5>
          </div>
          <div className='section-box-content'>
            <div className='section-box-desc'>
              Passionate about UI/UX. With years of development experience in HTML, CSS, JS, React and NextJS frameworks.
            </div>
          </div>
        </div>

        <div className="expertise-section-box">
          <div className="section-header">
            <IoLogoNodejs className='icon-box-icon' />
            <h5 className='icon-box-title'><span class="chonky-underline-yellow">Backend Dev</span><br />Web, Mobile</h5>
          </div>
          <div className='section-box-content'>
            <div className='section-box-desc'>
              Experienced in PHP, NodeJS, and databases, delivering effective web and mobile solutions.
            </div>
          </div>
        </div>
      </section>

      <div className='background-image-overlay'>
        <img src={HelloWord} alt='helloword' className='image-code' />
      </div>
    </div>
  )
}
