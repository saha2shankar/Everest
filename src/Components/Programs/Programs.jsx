import React from 'react'
import './Programs.css'
import program_1 from '../../assets/program-1.jpeg'
import program_2 from '../../assets/program-2.jpeg'
import program_3 from '../../assets/program-3.jpeg'
import program_icon_1 from '../../assets/program-icon-1.png'
import program_icon_2 from '../../assets/program-icon-2.png'
import program_icon_3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs'>
      <div className="program">
         <img src={program_1} alt="" />
         <div className="caption">
          <img src={program_icon_1} alt="" />
          <p>Pre-school (Age 2+)</p>
         </div>
         </div>
         <div className="program">
         <img src={program_2} alt="" />
         <div className="caption">
          <img src={program_icon_2} alt="" />
          <p>LKG-UKG</p>
         </div>
         </div>
         <div className="program">
         <img src={program_3} alt="" />
         <div className="caption">
          <img src={program_icon_3} alt="" />
          <p>Primary and Secondary (1 to 8)</p>
         </div>
         </div>
      
    </div>
  )
}

export default Programs
