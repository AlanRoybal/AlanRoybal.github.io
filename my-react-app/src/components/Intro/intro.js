import React from 'react'
import './intro.css'
import bg from '../../assets/introbg.png'
import { Link } from 'react-scroll'
import btnImg from '../../assets/degree.svg'

const Intro = () => {
  return (
    <section id="intro">
        <div className="introContent">
            <span className="greeting">Hello,</span>
            <span className="introText">I'm <span className="introName">Alan</span> <br />Computer Science <br /> Major</span>
            <p className="introPara">UT Austin please let me in 🙏</p>
            <Link><button className="btn"><img src={btnImg} alt="Admit Me" className="btnImg"/> Admit Me</button></Link>
        </div>
        <img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro;