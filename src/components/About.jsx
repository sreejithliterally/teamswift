import React from 'react'
import { Tilt } from 'react-tilt'
import {motion} from 'framer-motion'
import {styles} from '../styles'
import {} from '../constants'
import {fadeIn, textVariant} from '../utils/motion'
import { SectionWrapper } from '../hoc'
import Sebastian from '../constants/images/team1.jpeg';
import Sneha from '../constants/images/team2.jpeg';
import Reshma from '../constants/images/team3.jpeg';
import Neenu from '../constants/images/team4.jpeg';
import Nidhuna from '../constants/images/team5.jpeg';
import Anamika from '../constants/images/team6.jpeg';
import Nandu from '../constants/images/team7.jpeg';
import Varada from '../constants/images/team8.jpeg';
import Sharon from '../constants/images/team9.jpeg';
const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          Introduction
        </p>
        <h2 className={styles.sectionHeadText}>
          Overview.
        </h2>
      </motion.div>
      <motion.p
        variants={fadeIn("","",0.1,1)}
        className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] '
      >
        Our team, SWIFT, embodies the essence of innovation and modernity, propelling us towards excellence with unwavering dedication. The acronym SWIFT aptly captures our core values: Speed, symbolizing our ability to adapt and respond with agility; Efficiency, reflecting our commitment to streamlined processes and productivity; Adaptability, highlighting our capacity to pivot and evolve in an ever-changing landscape; Unity, emphasizing our strong bond and collaborative spirit; and Dynamism, underscoring our passion for innovation and progress.
      </motion.p>
      <motion.div variants={textVariant()}>
      
        <h2 className={styles.sectionHeadText}>
         Our Team
        </h2>
      </motion.div>
      
      <div className="flex flex-wrap justify-center gap-10 mt-10">
        <div className="text-center">
          <img src={Sebastian} alt="sebastian" className="w-32 h-32 rounded-full object-cover"/>
          <p className="mt-2 text-secondary text-lg">Sebastian K R</p>
        </div>
        <div className="text-center">
          <img src={Sneha} alt="Sneha" className="w-32 h-32 rounded-full object-cover"/>
          <p className="mt-2 text-secondary text-lg">Sneha K R</p>
        </div>
        <div className="text-center">
          <img src={Reshma} alt="Charlie Brown" className="w-32 h-32 rounded-full object-cover"/>
          <p className="mt-2 text-secondary text-lg">Reshma L</p>
        </div>
        <div className="text-center">
          <img src={Neenu} alt="Diana Prince" className="w-32 h-32 rounded-full object-cover"/>
          <p className="mt-2 text-secondary text-lg">Neenu Benny</p>
        </div>
        <div className="text-center">
          <img src={Nidhuna} alt="Sneha" className="w-32 h-32 rounded-full object-cover"/>
          <p className="mt-2 text-secondary text-lg">Nidhuna K</p>
        </div>
        <div className="text-center">
          <img src={Nandu} alt="Nandu" className="w-32 h-32 rounded-full object-cover"/>
          <p className="mt-2 text-secondary text-lg">Nandukrishna S</p>
        </div>
        <div className="text-center">
          <img src={Anamika} alt="Anamika" className="w-32 h-32 rounded-full object-cover"/>
          <p className="mt-2 text-secondary text-lg">Anamika M</p>
        </div>
        <div className="text-center">
          <img src={Varada} alt="Varada" className="w-32 h-32 rounded-full object-cover"/>
          <p className="mt-2 text-secondary text-lg">Varada Balakrishnan</p>
        </div>
        <div className="text-center">
          <img src={Sharon} alt="Sharon" className="w-32 h-32 rounded-full object-cover"/>
          <p className="mt-2 text-secondary text-lg">Sharon Valsalan</p>
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(About, "about")