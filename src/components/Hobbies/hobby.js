import React from 'react';
import './hobby.css';
import hobby1 from '../../assets/hobby1.png'
import hobby2 from '../../assets/hobby2.png'
import hobby3 from '../../assets/hobby3.png'

const Hobby = () => {
  return (
    <section id="hobbies">
        <h2 className="hobbyTitle">My Art</h2>
        <span className="hobbyDesc">I make cool t-shirts by painting with bleach.</span>
        <div className="hobbysImgs">
          <img src={hobby1} alt="" className="hobbysImg" />
          <img src={hobby2} alt="" className="hobbysImg" />
          <img src={hobby3} alt="" className="hobbysImg" />
        </div>
        {/* <button className="hobbyBtn">See More</button> */}
    </section>
  )
}

export default Hobby