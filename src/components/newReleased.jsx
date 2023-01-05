import { useState } from 'react';
import { motion } from 'framer-motion';
import Audioplayer from './audioplayer';

const musicSrc = [
  {
    id: 's1',
    name: 'song01',
    coverImage: './music/song1.jpg',
    track: './music/song1.mp3',
  },
  {
    id: 's2',
    name: 'song02',
    coverImage: './music/song2.jpg',
    track: './music/song2.mp3',
  },
  {
    id: 's3',
    name: 'song03',
    coverImage: './music/song3.jpg',
    track: './music/song3.mp3',
  },
];

function NewReleased() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [currentFile, setCurrentFile] = useState({
    track: './music/song1.mp3',
    img: './music/song1.jpg',
  });

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

  console.log(currentFile, trackIndex);

  return (
    <div className="w-full h-[200vh] ">
      <div className="w-full h-[100vh] flex flex-col md:flex-row">
        <div className="w-full h-[50vh] md:w-[50vw] md:h-full  flex flex-col justify-end items-center gap-[2vh] md:justify-center">
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

        <div className="cu--grid-newReleased w-full h-[50vh] md:w-[50vw] md:h-full p-[2vh]">
          {musicSrc.map((song, i) => (
            <motion.div
            whileTap={{scale:0.95}}
            // transition={{duration:0.3}}
              key={song.name}
              onClick={() => handleTrack(i)}
              className="cu--musiclist-thubnail rounded-md"
              style={{ backgroundImage: `url(${song.coverImage})` }}
            >
              <motion.div
                whileHover={{ opacity: 1 }}
                whileTap={{ opacity: 1 }}
                // onClick={}
                className="opacity-0 backdrop-blur-sm w-full h-full backdrop-opacity-90  flex flex-col justify-center items-center"
              >
                <h2 className="text-white">{song.name}</h2>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default NewReleased;
