import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <div className=" bg-[url('./hero/bg.png')] h-[100vh]  bg-center overflow-hidden">
      <div className=" h-full flex flex-col justify-start items-center pt-[20vh] md:justify-center md:items-start  md:pt-[10vh] md:pl-[10vw] ">
        <img src="./hero/SelenaNicole.png" className="w-[65vw] md:w-[20vw]" />

        <h4 className="text-white text-center pt-[3vh] text-[1.4rem] md:text-[1.8vw] ">
          Singer | Song writer | Actress
        </h4>

        <img
          src="./hero/Girl.png"
          className="mix-blend-lighten opacity-80 absolute bottom-0 w-screen  origin-bottom md:w-[60vw] md:right-0 md:opacity-80"
        />

        <motion.img
          src="./hero/scrollDown.png"
          className="absolute bottom-[5vh] w-[7vw] left-0 right-0 m-auto md:w-[2vw]"
          animate={{
            y: [-30, 0, -30],
          }}
          transition={{
            duration: 3,
            ease: 'easeInOut',
            delay: 0.5,
            repeat: Infinity,
          }}
        />
      </div>
    </div>
  );
}

export default Hero;

{
  /* <h1 className="CU-hero--topic  mix-blend-normal flex justify-start  pt-[1vh] text-[5rem] leading-[5rem] ">
  Selena <br /> Nicole
</h1> */
}
