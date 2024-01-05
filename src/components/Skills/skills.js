import React from 'react';
import './skills.css';
import UIDesign from '../../assets/logo.svg';
import WebDesign from '../../assets/logo.svg';
import AppDesign from '../../assets/logo.svg';

const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">I do stuff lmao</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>UI Design</h2>
                    <p>CONTENTCONTENTCONTENTCONTENTCONTENTCONTENT</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>Web Design</h2>
                    <p>CONTENTCONTENTCONTENTCONTENTCONTENTCONTENT</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>App Design</h2>
                    <p>CONTENTCONTENTCONTENTCONTENTCONTENTCONTENT</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills