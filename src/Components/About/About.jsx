import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
        <div className="about-left">
        <img src={about_img} alt="" className='about-img' />
        <img src={play_icon} alt="" className='play_icon' onClick={()=>{setPlayState(true)}}/>
        </div>

        <div className="about-right">
        <h3>About Everest Nepal</h3>
        <h2>Explore new ideas and dreams with us !</h2>
        <p>"Welcome to Everest Nepal English Boarding School, where learning meets adventure! Located in Kamala Municipality 3, Dhanusha, our school is a vibrant hub of education and exploration.With dedicated teachers and modern facilities, we strive to provide a nurturing environment where students can thrive academically and socially. <br /> At Everest Nepal, we believe in fostering curiosity, creativity, and character development in every child. Join us as we embark on a journey of discovery and growth, preparing students to become confident, compassionate leaders of tomorrow. Together, let's create a brighter future at Everest Nepal English Boarding School."</p>
      
        </div>
    </div>
  )
}

export default About
