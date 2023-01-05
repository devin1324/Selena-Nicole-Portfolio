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

function Audioplayer() {
  const [trackIndex, setTrackIndex] = useState(0);
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioSrc = './music/Song3.mp3';

  const audioRef = useRef(new Audio('./music/Song2.mp3'));
  const inetervalRef = useRef();
  const isReady = useRef(false);

  const { duration } = audioRef.current;

  const currentPercentage = duration
    ? `${(trackProgress / duration) * 100}%`
    : '0%';
  const trackStyling = `
  -webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))
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

    audioRef.current = new Audio(audioSrc);
    setTrackProgress(audioRef.current.currentTime);

    if (isReady.current) {
        // audioRef.current.play();
        console.log('playing from useeffect')
      // setIsPlaying(true);
      startTimer();
    } else {
      console.log('isReady set to true')
      isReady.current = true;
    }
  }, [trackIndex]);

  //
  //
  //
  //
  //

  const arr = 5;

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
    setTrackIndex((trackIndex + 1) % arr);
    console.log(trackIndex);
  };

  //   Previous music track
  const handlePrevTrack = () => {
    setTrackIndex((trackIndex - 1 + arr) % arr);
    console.log(trackIndex);
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
    <div className=" cu--audio-box-shadow flex flex-row items-end justify-center gap-[1vw] bg-slate-600 w-[80vw] h-[25vh] rounded-[20px] p-[5vw]  mb-[2vh] md:w-[26vw] md:h-[26vw] md:max-w-[400px] md:max-h-[400px]">
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
  );
}

export default Audioplayer;
