'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';


const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className='gradient-02 z-0' />
    <motion.div 
    varient={staggerContainer}
    initial="hidden"
    whileInView='show'
    viewport={{ once: false, amount: 0.25}}
    className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Our Universe "
      textStyles="text-center" />
    <motion.p
    variants={fadeIn('up', 'tween', 0.2, 1)}
    className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">

    <span className='font-extrabold text-white'>THE DEV WORLD</span> is a virtual space that's perfect for web developers to showcase their skills in front-end and back-end web development.
       It's kind of like a mini metaverse with lots of social interaction, including virtual meetings and other fun activities.
        So, it's not just work, work, work in the tech world!<br></br>
    <span className='font-extrabold text-white'><br></br>The AWESOMENESS OF THE DEV WORLD</span>  is a space for web developers to show off their skills in web development.
     It's almost like a mini metaverse! The best part is that developers get to display their technical skills in front-end and back-end development to a broader audience. It's a fantastic platform for tech enthusiasts to come together, share ideas, and collaborate on projects. 
    Overall, the world of developers is a great place to be if you're into web development and want to connect with other like-minded individuals<br></br>
    <span className='font-extrabold text-white'><br></br>Virtual Reality Space</span> Join the world of developers and see some the coolest pieces of web-development you will ever come across, from web-aplications in 3D and more. Let's explore the Dev World by scrolling down.
    </motion.p>


    <motion.img
    variants={fadeIn("up", "tween", 0.3, 1)}
    src="/arrow-down.svg"
      alt="arrow down"
      className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
