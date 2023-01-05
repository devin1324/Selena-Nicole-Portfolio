

import { motion } from 'framer-motion';
import Audioplayer from './audioplayer';

function NewReleased() {
  return (
    <div className="w-full h-[200vh] ">
      <div className="w-full h-[100vh] flex flex-col md:flex-row">
        <div className="w-full h-[50vh] md:w-[50vw] md:h-full bg-slate-300 flex flex-col justify-end items-center gap-[2vh] md:justify-center">
          <h1 className="cu--topic-gradiant cu-font---anaheim-Regular text-[10vw] text-center md:text-[3vw]">
            NEW RELEASED
          </h1>
          <Audioplayer />
        </div>

        <div className="w-full h-[50vh] md:w-[50vw] md:h-full bg-orange-300"></div>
      </div>
    </div>
  );
}

export default NewReleased;
