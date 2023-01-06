import React from 'react';

function AboutMe() {
  return (
    <div className="w-full h-[100vh] flex flex-col justify-center items-center md:flex-row  pt-[10vh] md:w-[70vw] md:min-w-[728px]">

      <div className='w-full h-[50vh]  md:h-full md:flex md:flex-col md:gap-[2vh] md:items-center md:justify-center'>
        <h1 className="cu--topic-gradiant cu-font---anaheim-Regular text-[10vw] text-center md:text-[3vw]">ABOUT ME</h1>
        <p className="cu-font---anaheim-Regular px-[10vw] font-medium leading-8 md:text-[1.5rem] md:px-[3%]">
          Selena Nicole was born in Houston, Texas to parents Tammy and Frankie
          Flores, she has a sister named Maddie Taylor. Her mother is of German
          and Native American descent and her father is Mexican American.[4][3]
          She was raised in Katy, Texas and became interested in music around
          age 10, when her father purchased a karaoke machine for her.[3] Nicole
          also participated in her church's music programs, taking part in a
          church band during high school and choir during middle school.
        </p>
      </div>


      <div className="w-full h-[50vh]  md:h-full md:flex md:pt-[20vh] ">
          <img src="./aboutme/card-1.jpg" alt="card-1"  className='cu--about-img-shadow absolute w-[80%] h-[30vh] object-cover rounded-[20px] ml-[5%] mt-[5%] md:w-[28%] md:ml-[2%] md:mt-[2%]  md:h-[40vh]'/>
          <img src="./aboutme/card-2.jpg" alt="card-1"  className='cu--about-img-shadow absolute w-[80%] h-[30vh] object-cover rounded-[20px] ml-[10%] mt-[10%] md:w-[28%] md:ml-[6%] md:mt-[6%]  md:h-[40vh]'/>
          <img src="./aboutme/card-3.jpg" alt="card-1"  className='cu--about-img-shadow absolute w-[80%] h-[30vh] object-cover rounded-[20px] ml-[15%] mt-[15%] md:w-[28%] md:ml-[10%] md:mt-[10%] md:h-[40vh]' />
      </div>
    </div>
  );
}

export default AboutMe;
