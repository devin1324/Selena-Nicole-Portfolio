import React, { useState, useEffect, useRef } from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import {
  IoPlaySkipBackCircleSharp,
  IoPlaySkipForwardCircle,
} from 'react-icons/io5';
import { motion } from 'framer-motion';

//
//
//
//
//

function Audioplayer({
  trackIndex,
  setTrackIndex,
  musicSrc,
  currentFile,
  handleTrack,
}) {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef(new Audio(currentFile.track));
  const inetervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : '0%';
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage},  #c58792), color-stop(${currentPercentage}, transparent))
`;

  //
  //
  //
  //
  //
  //

  //Effect runs when playing pausing music
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      startTimer();
    } else {
      clearInterval(inetervalRef.current);
      audioRef.current.pause();
    }
    return () => {
      audioRef.current.pause();
      clearInterval(inetervalRef.current);
    };
  }, [isPlaying]);

  //
  //
  //
  //
  //
  //
  //Changing the track
  useEffect(() => {
    audioRef.current.pause();

    audioRef.current = new Audio(currentFile.track);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
      audioRef.current.play();
      setIsPlaying(true);
      startTimer();
    } else {
      isReady.current = true;
    }
  }, [trackIndex]);

  //
  //
  //
  //
  //

  const startTimer = () => {
    clearInterval(inetervalRef.current);

    inetervalRef.current = setInterval(() => {
      audioRef.current.ended
        ? handleNextTrack()
        : setTrackProgress(audioRef.current.currentTime);
    }, [1000]);
  };

  //
  //
  //
  //
  //
  //
  //
  //
  //play / pause music
  const handleMusic = () => {
    setIsPlaying(!isPlaying);
    // console.log(isPlaying ? 'Music is playing' : 'Music is not playing');
  };

  //   Next music track
  const handleNextTrack = () => {
    setTrackIndex((trackIndex + 1) % musicSrc.length);
    handleTrack((trackIndex + 1) % musicSrc.length);
  };

  //   Previous music track
  const handlePrevTrack = () => {
    setTrackIndex((trackIndex - 1 + musicSrc.length) % musicSrc.length);
    handleTrack((trackIndex - 1 + musicSrc.length) % musicSrc.length);
  };

  const onScrub = (value) => {
    clearInterval(inetervalRef.current);
    audioRef.current.currentTime = value;
    setTrackProgress(audioRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  //
  //
  //
  //
  //
  //
  //
  //
  return (
    <div
      style={{ backgroundImage: `url(${currentFile.img})` }}
      className=" cu--audio-box flex flex-col items-center justify-end gap-[3vh] bg-slate-600 w-[80vw] h-[25vh] rounded-[20px] p-[5vw]  mb-[2vh] md:w-[26vw] md:h-[26vw] md:max-w-[400px] md:max-h-[400px]"
    >
      <h1 className="text-white">{musicSrc[trackIndex].name}</h1>
      <div className="flex flex-row justify-center items-end">
        <motion.button
          type="button"
          aria-label="Previous"
          onClick={handlePrevTrack}
          whileTap={{ scale: 0.95 }}
          className="cu--newReleased-button-shadow"
        >
          <IoPlaySkipBackCircleSharp size={'2rem'} />
        </motion.button>

        <motion.button
          type="button"
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
          type="button"
          onClick={handleNextTrack}
          whileTap={{ scale: 0.95 }}
          className="cu--newReleased-button-shadow"
        >
          <IoPlaySkipForwardCircle size={'2rem'} />
        </motion.button>
      </div>
      <input
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={duration ? duration : `${duration}`}
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
        style={{ background: trackStyling }}
      />
    </div>
  );
}

export default Audioplayer;
