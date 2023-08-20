import { FaBeer } from 'react-icons/fa';
import HelloWord from '../images/hello-world-html-code.png';

export default function Expertise() {
  return (
    <div className="expertise-container" id="expertise">
      <h2 className="container-heading-title">My Expertise</h2>

      <section className="expertise-section">
        <div className="expertise-section-box">
          <div className="section-header">
            <FaBeer className='icon-box-icon' />
            <h5 className='icon-box-title'><span class="chonky-underline-megenta">Software</span><br />Development</h5>
          </div>
        </div>

        <div className="expertise-section-box">
          <div className="section-header">
            <FaBeer className='icon-box-icon' />
            <h5 className='icon-box-title'><span class="chonky-underline-megenta">Software</span><br />Development</h5>
          </div>
        </div>

        <div className="expertise-section-box">
          <div className="section-header">
            <FaBeer className='icon-box-icon' />
            <h5 className='icon-box-title'><span class="chonky-underline-megenta">Software</span><br />Development</h5>
          </div>
        </div>
      </section>

      <div className='background-image-overlay'>
        <img src={HelloWord} alt='helloword' className='image-code'/>
      </div>
    </div>
  )
}
