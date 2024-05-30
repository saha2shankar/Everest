import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/user-1.jpg'
import user_2 from '../../assets/user-2.jpg'
import user_3 from '../../assets/user-3.jpg'
import user_4 from '../../assets/user-4.jpg'
import user_5 from '../../assets/user-5.jpg'
import user_6 from '../../assets/user-6.jpg'
import user_7 from '../../assets/user-7.jpg'

const Testimonials = () => {
  const slider = useRef();
  let tx = 0;
    const slideForward = ()=>{
      if(tx >-50){
        tx -=25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
    }
    const slideBackward = ()=>{
      if(tx < 0){
        tx +=25;
      }
      slider.current.style.transform = `translateX(${tx}%)`;
    }


  return (
    <div className='testimonials'>
        <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
        <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
      <div className="slider">
        <ul ref={slider}>
          <li> <div className="slide">
            <div className="user-info">
              <img src={user_1} alt="" />
              <div>
                <h3>Sahana Khatun</h3>
                <span>+2 Business studies</span>
              </div>
            </div>
            <p>"Everest Nepal School feels like a second home to me. The teachers are so kind, and I love learning new things every day!" </p>
            </div>
            </li>
            <li> <div className="slide">
            <div className="user-info">
              <img src={user_2} alt="" />
              <div>
                <h3>Roshanni Jha</h3>
                <span>Diploma in electrical engineering </span>
              </div>
            </div>
            <p>"I used to be shy, but now I love going to school because I've made so many friends here. Everest Nepal School is awesome!" </p>
            </div>
            </li>
            <li> <div className="slide">
            <div className="user-info">
              <img src={user_3} alt="" />
              <div>
                <h3>Rabina Yadav</h3>
                <span> Health assistant (HA)</span>
              </div>
            </div>
            <p>"I love all the extracurricular activities at Everest Nepal School. From sports to music, there's something for everyone!" </p>
            </div>
            </li>
            <li> <div className="slide">
            <div className="user-info">
              <img src={user_4} alt="" />
              <div>
                <h3>Lisu Yadav</h3>
                <span>Health assistant (HA) </span>
              </div>
            </div>
            <p>"I feel so proud to be a student at Everest Nepal School. The teachers are amazing, and they always encourage us to do our best."</p>
            </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials