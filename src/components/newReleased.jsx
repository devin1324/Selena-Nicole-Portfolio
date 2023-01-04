import { useState } from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import {
  IoPlaySkipBackCircleSharp,
  IoPlaySkipForwardCircle,
} from 'react-icons/io5';
import { motion } from 'framer-motion';

function NewReleased() {
  // Play and Pause music
  const [isPlaying, setIsPlay] = useState(0);

  const handleMusic = () => {
    setIsPlay(!isPlaying);
    console.log(isPlaying ? 'Music is playing' : 'Music is not playing');
  };

  //   Next music track
  const handleNextTrack = () => {
    setIsPlay(0);
    console.log('Next music track');
  };

  //   Previous music track
  const handlePrevTrack = () => {
    setIsPlay(0);
    console.log('Previous music track');
  };

  return (
    <div className="w-full h-[200vh] ">
      <div className="w-full h-[100vh] flex flex-col md:flex-row">
        <div className="w-full h-[50vh] md:w-[50vw] md:h-full bg-slate-300 flex flex-col justify-end items-center gap-[2vh] md:justify-center">
          <h1 className="cu--topic-gradiant cu-font---anaheim-Regular text-[10vw] text-center md:text-[3vw]">
            NEW RELEASED
          </h1>
          <div className=" cu--audio-box-shadow flex flex-row items-end justify-center gap-[1vw] bg-slate-600 w-[80vw] h-[25vh] rounded-[20px] p-[5vw]  mb-[2vh] md:w-[26vw] md:h-[26vw] md:max-w-[400px] md:max-h-[400px]">
            <motion.button
              onClick={handlePrevTrack}
              whileTap={{ scale: 0.95 }}
              className="cu--newReleased-button-shadow"
            >
              <IoPlaySkipBackCircleSharp size={'2rem'} />
            </motion.button>

            <motion.button
              onClick={handleMusic}
              whileTap={{ scale: 0.95 }}
              className="cu--newReleased-button-shadow"
            >
              {isPlaying ? (
                <FaPauseCircle size={'2.5rem'} />
              ) : (
                <FaPlayCircle size={'2.5rem'} />
              )}
            </motion.button>

            <motion.button
              onClick={handleNextTrack}
              whileTap={{ scale: 0.95 }}
              className="cu--newReleased-button-shadow"
            >
              <IoPlaySkipForwardCircle size={'2rem'} />
            </motion.button>
          </div>
        </div>

        <div className="w-full h-[50vh] md:w-[50vw] md:h-full bg-orange-300"></div>
      </div>
    </div>
  );
}

export default NewReleased;
