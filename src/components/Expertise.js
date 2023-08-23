import { useEffect } from 'react';
import { HiOutlineComputerDesktop } from 'react-icons/hi2';
import { FaReact } from "react-icons/fa";
import { IoLogoNodejs } from "react-icons/io";
import HelloWord from '../images/hello-world-html-code.png';
// import { useInView } from "react-intersection-observer"

export default function Expertise() {
  // const containerRef = useRef();
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

  // const [ref, inView] = useInView({ threshold: .5 })
  // const [animationRun, setAnimationRun] = useState(false);

  // const handleAnimationEnd = () => {
  //   setAnimationRun(true);
  // };

  return (
    <div className="expertise-container" id="expertise" >
      <div>
        {/* <h2 className={`${inView && !animationRun ? "container-heading-title animate__animated animate__fadeInUp" : "container-heading-title"}`}
          onAnimationEnd={handleAnimationEnd}>My Expertise</h2> */}
        <h2 className="container-heading-title hidden">My Expertise</h2>

        <section className="expertise-section">
          {/* <div className={`${inView && !animationRun ? "expertise-section-box animate__animated animate__fadeInUp" : "expertise-section-box"}`}
            onAnimationEnd={handleAnimationEnd}> */}
          <div className="expertise-section-box hidden">
            <div className="section-header">
              <HiOutlineComputerDesktop className='icon-box-icon' />
              <h5 className='icon-box-title'><span className="chonky-underline-megenta">Software</span><br />Development</h5>
            </div>
            <div className='section-box-content'>
              <div className='section-box-desc'>
                Experienced in both functional and OOP: C#, Python, Java, JavaScript, TypeScript.
              </div>
            </div>
          </div>

          {/* <div className={`${inView && !animationRun ? "expertise-section-box animate__animated animate__fadeInUp" : "expertise-section-box"}`}
            onAnimationEnd={handleAnimationEnd}> */}
          <div className="expertise-section-box hidden">
            <div className="section-header">
              <FaReact className='icon-box-icon' />
              <h5 className='icon-box-title'><span className="chonky-underline-blue">Frontend Dev</span><br />React, NextJS</h5>
            </div>
            <div className='section-box-content'>
              <div className='section-box-desc'>
                Passionate about UI/UX. With years of development experience in HTML, CSS, JS, React and NextJS frameworks.
              </div>
            </div>
          </div>

          {/* <div className={`${inView && !animationRun ? "expertise-section-box animate__animated animate__fadeInUp" : "expertise-section-box"}`}
            onAnimationEnd={handleAnimationEnd}> */}
          <div className="expertise-section-box hidden">
            <div className="section-header">
              <IoLogoNodejs className='icon-box-icon' />
              <h5 className='icon-box-title'><span className="chonky-underline-yellow">Backend Dev</span><br />Web, Mobile</h5>
            </div>
            <div className='section-box-content'>
              <div className='section-box-desc'>
                Experienced in PHP, NodeJS, and databases, delivering effective web and mobile solutions.
              </div>
            </div>
          </div>
        </section>
      </div>

      <div className='background-image-overlay'>
        <img src={HelloWord} alt='helloword' className='image-code' />
      </div>
    </div>
  )
}
