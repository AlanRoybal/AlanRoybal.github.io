import React from 'react';
import './skills.css';
import UIDesign from '../../assets/logo.svg';
import WebDesign from '../../assets/logo.svg';
import AppDesign from '../../assets/logo.svg';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">I am very active in my community on and off campus. Always looking to learn some new faucet of computer science and improve my daily life.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Research</h2>
                    <p>I observe the Algorithm and Theory Research Group at UT Dallas while also conducting my own research in Latin square transversals. Both of these are supervised by Dr. Sergey Bereg. In my free time, I completed certifications from Coursera and freeCodeCamps.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Teaching</h2>
                    <p>I volunteer at my old high school as a teaching assistant for the intro computer science class. I am also a coding instructor for the iCode Richardson location.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Clubs and Activities</h2>
                    <p>I am very active on campus with a variety of clubs. I am part of UT Dallas' ACM chapter where I was a part of ACM Projects - mobile development - and now an officer for the largest hackathon in Texas. This semester I will be a part of ACM Research and AIS Mentees to pursue AI/ML.</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills