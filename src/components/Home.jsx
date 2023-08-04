import React, { useEffect } from "react";
import '../styles/Home.css';
import Aboutme from "./Aboutme";
import Comp from './competence'
function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    // Cleanup the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    
    <div id="sec1">
        <div>
            
        </div>
      <section className="hidden" >
        <div className="parent">
          <div className="wrapper">
            <div className="static-txt" >I'm a</div>
            <ul className="dynamic-txts">
              <li><span>Programmer</span></li>
              <li><span>Designer</span></li>
              <li><span>Developer</span></li>
              <li><span>Freelancer</span></li>
            </ul>
          </div>
          <p className="paragrpah">Welcome, I invite you to explore my professional portfolio showcasing my skills and achievements.</p>
        </div>
        <div className="cont">
          <p className="Email">charafetude@gmail.com</p>
          <div className="line"><p className="num">0693170132</p> </div>
        
        </div>
      
<a href="#sec-2">
        <div className="scroll-down"></div>
      </a>

      
      </section>

     
      

      <section className="hidden" >
        <div id="sec-2">
          <Aboutme />
        </div>
      
      </section>

      <section className="hidden">
    
        <div id="sec-3">
     <Comp/>
        </div>
      </section>
    </div>
  );
}

export default Home;
