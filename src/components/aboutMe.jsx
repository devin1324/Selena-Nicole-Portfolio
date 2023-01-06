import React from 'react';

function AboutMe() {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center md:flex-row  pt-[10vh]">

      <div className='w-full h-[50vh] md:w-[50vw] md:h-full md:flex md:flex-col md:gap-[2vh] md:items-center md:justify-center'>
        <h1 className="cu--topic-gradiant cu-font---anaheim-Regular text-[10vw] text-center md:text-[3vw]">ABOUT ME</h1>
        <p className="cu-font---anaheim-Regular px-[10vw] font-medium leading-8 md:text-[1.5rem]">
          Selena Nicole was born in Houston, Texas to parents Tammy and Frankie
          Flores, she has a sister named Maddie Taylor. Her mother is of German
          and Native American descent and her father is Mexican American.[4][3]
          She was raised in Katy, Texas and became interested in music around
          age 10, when her father purchased a karaoke machine for her.[3] Nicole
          also participated in her church's music programs, taking part in a
          church band during high school and choir during middle school.
        </p>
      </div>


      <div className="w-full h-[50vh] md:w-[50vw] md:h-full md:flex md:pt-[20vh] ">
          <img src="./aboutme/card-1.jpg" alt="card-1"  className='cu--about-img-shadow absolute w-[80vw] h-[30vh] object-cover rounded-[20px] ml-[5vw] mt-[5vw] md:w-[35vw] md:ml-[2vw] md:mt-[2vw]  md:h-[40vh]'/>
          <img src="./aboutme/card-2.jpg" alt="card-1"  className='absolute w-[80vw] h-[30vh] object-cover rounded-[20px] ml-[10vw] mt-[10vw] md:w-[35vw] md:ml-[6vw] md:mt-[6vw]  md:h-[40vh]'/>
          <img src="./aboutme/card-3.jpg" alt="card-1"  className='absolute w-[80vw] h-[30vh] object-cover rounded-[20px] ml-[15vw] mt-[15vw] md:w-[35vw] md:ml-[10vw] md:mt-[10vw] md:h-[40vh]' />
      </div>
    </div>
  );
}

export default AboutMe;
