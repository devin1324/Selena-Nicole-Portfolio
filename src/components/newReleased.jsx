import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import Audioplayer from './audioplayer';
import VideoPlayer from './videoPlayer';
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from 'react-icons/bs';

const musicSrc = [
  {
    name: 'Before You Go',
    coverImage: './music/song1.jpg',
    track: './music/song1.mp3',
  },
  {
    name: 'Walk Me Home',
    coverImage: './music/song2.jpg',
    track: './music/song2.mp3',
  },
  {
    name: 'Beautiful',
    coverImage: './music/song3.jpg',
    track: './music/song3.mp3',
  },
  {
    name: 'Hello',
    coverImage: './music/song4.jpg',
    track: './music/song4.mp3',
  },
  {
    name: 'Lonely',
    coverImage: './music/song5.jpg',
    track: './music/song5.mp3',
  },
  {
    name: 'Lauv',
    coverImage: './music/song6.jpg',
    track: './music/song6.mp3',
  },
  {
    name: 'Together',
    coverImage: './music/song7.jpg',
    track: './music/song7.mp3',
  },
  {
    name: 'No Time To Die',
    coverImage: './music/song8.jpg',
    track: './music/song8.mp3',
  },
  {
    name: 'Still Learning',
    coverImage: './music/song9.jpg',
    track: './music/song9.mp3',
  },
];

//
//
//
//
//
//
//
//
//
//
//

function NewReleased() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentFile, setCurrentFile] = useState({
    track: './music/song1.mp3',
    img: './music/song1.jpg',
  });
  const [currentVedio, setCurrentVedio] = useState(0);

  const vedioContainerWidth = useRef(33.333); //Width of a singal vedio element in vw

  //
  //
  //
  //
  const handleTrack = (i) => {
    setTrackIndex(i);

    let updateFile;
    updateFile = {
      track: musicSrc[i].track,
      img: musicSrc[i].coverImage,
    };

    setCurrentFile((currentFile) => ({
      ...currentFile,
      ...updateFile,
    }));
  };
  //
  //
  //
  //
  //
  //
  //
  const handlePrevVedio = () => {
    if (currentVedio / vedioContainerWidth.current > 0) {
      setCurrentVedio(currentVedio - vedioContainerWidth.current);
    }
  };

  const handleNextVedio = () => {
    if (currentVedio / vedioContainerWidth.current < 2) {
      setCurrentVedio(currentVedio + vedioContainerWidth.current);
    }
  };

  //
  //
  //
  //
  //
  //
  //
  //
  //
  return (
    <div className="w-full h-[200vh]  md:w-[70vw] md:min-w-[768px] ">
      {/* Audio */}
      <div
        id="music"
        className="w-full h-[100vh] flex flex-col md:flex-row items-center"
      >
        <div className="w-full h-[50vh] md:w-[50%] md:h-full  flex flex-col justify-end items-center gap-[2vh] md:justify-center">
          <h1 className="cu--topic-gradiant cu-font---anaheim-Regular text-[10vw] text-center md:text-[3vw]">
            NEW RELEASED
          </h1>
          <Audioplayer
            trackIndex={trackIndex}
            setTrackIndex={setTrackIndex}
            musicSrc={musicSrc}
            currentFile={currentFile}
            setCurrentFile={setCurrentFile}
            handleTrack={handleTrack}
          />
        </div>

        <div className="cu--grid-newReleased w-full h-[50vh] md:w-[50%] md:h-[60%] p-[2vh] ">
          {musicSrc.map((song, i) => (
            <motion.div
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.1 }}
              key={song.name}
              onClick={() => handleTrack(i)}
              className="cu--musiclist-thubnail rounded-md"
              style={{ backgroundImage: `url(${song.coverImage})` }}
            >
              <motion.div
                whileHover={{ opacity: 1 }}
                whileTap={{ opacity: 1 }}
                className="opacity-0 backdrop-blur-sm w-full h-full backdrop-opacity-90  flex flex-col justify-center items-center"
              >
                <h2 className="text-white">{song.name}</h2>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vedio */}

      <div id="vedio" className="cu--video-container relative">
        <div className="cu--video-div md:w-[70vw] md:min-w-[768px] h-[100vh] flex flex-row  items-center  overflow-hidden z-100">
          <motion.div
            className="flex flex-col gap-[5vh] md:gap-[0vw] md:flex-row md:flex-nowrap z-100"
            initial={{ x: 0 }}
            animate={{ x: `-${currentVedio}%` }}
            transition={{ duration: 1 }}
          >
            <VideoPlayer src="./video/Impossible.mp4" name="Impossible"/>
            <VideoPlayer src="./video/Skyward.mp4" name="Skyward"/>
            <VideoPlayer src="./video/Someone You Loved.mp4" name="Someone You Loved"/>
          </motion.div>
        </div>

        <div className="cu--video-div relative z-200 w-full  justify-between hidden md:flex px-[2vw]">
          <button
            onClick={handlePrevVedio}
            className="cu--newReleased-button-shadow "
          >
            <BsFillArrowLeftCircleFill size={'2.5rem'} />
          </button>
          <button
            onClick={handleNextVedio}
            className="cu--newReleased-button-shadow "
          >
            <BsFillArrowRightCircleFill size={'2.5rem'} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewReleased;
