import React, { useState, useRef } from 'react';
import { BiPlayCircle, BiPauseCircle } from 'react-icons/bi';
import { motion } from 'framer-motion';

function VideoPlayer() {
  const [trackProgress, setTrackProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const videoRef = useRef();
  const inetervalRef = useRef();

  const onScrub = (value) => {
    clearInterval(inetervalRef.current);
    videoRef.current.currentTime = value;
    setTrackProgress(videoRef.current.currentTime);
  };

  const onScrubEnd = () => {
    if (!isPlaying) {
      setIsPlaying(true);
    }
    startTimer();
  };

  const togglePlay = () => {
    if (isPlaying) {
      startTimer();
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const startTimer = () => {
    clearInterval(inetervalRef.current);

    inetervalRef.current = setInterval(() => {
      videoRef.current.ended
        ? videoRef.current.pause()
        : setTrackProgress(videoRef.current.currentTime);
    }, [1000]);
  };

  return (
    <div className="md:w-[70vw] md:min-w-[768px]  justify-center cu--vedioPlayer-container">
      <video
        ref={videoRef}
        className=" w-[80%] rounded-[10px] self-center cu--vedioPlayer-element z-100 relative"
      >
        <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
      </video>

      <motion.button
        onClick={togglePlay}
        whileTap={{ scale: 0.95 }}
        className="cu--newReleased-button-shadow cu--vedioPlayer-button origin-center self-end justify-self-start ml-[11%] mb-[3%]  z-100 relative"
      >
        {isPlaying ? (
          <BiPauseCircle  size={'2rem'} />
        ) : (
          <BiPlayCircle size={'2rem'} />
        )}
      </motion.button>

      <input
        id="vedioPlayer"
        type="range"
        value={trackProgress}
        step="1"
        min="0"
        max={
          inetervalRef.current
            ? inetervalRef.current
            : `${inetervalRef.current}`
        }
        className="w-[60%] self-end cu--vedioPlayer-bar  z-200 relative"
        onChange={(e) => onScrub(e.target.value)}
        onMouseUp={onScrubEnd}
        onKeyUp={onScrubEnd}
      />
    </div>
  );
}

export default VideoPlayer;
