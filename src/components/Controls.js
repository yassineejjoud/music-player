import { useState, useEffect, useCallback, useRef } from "react";

// icons
import {
  IoPlayBackSharp,
  IoPlayForwardSharp,
  IoPlaySkipBackSharp,
  IoPlaySkipForwardSharp,
  IoPlaySharp,
  IoPauseSharp,
} from "react-icons/io5";

const Controls = ({ audioRef, progressBarRef, duration, setTimeProgress }) => {
  const repeat = useCallback(() => {
    const currentTime = audioRef.current?.currentTime;
    setTimeProgress(currentTime);
    progressBarRef.current.value = currentTime;
    progressBarRef.current.style.setProperty(
      "--range-progress",
      `${(progressBarRef.current.value / duration) * 100}%`
    );

    playAnimationRef.current = requestAnimationFrame(repeat);
  }, [audioRef, duration, progressBarRef, setTimeProgress]);
  const playAnimationRef = useRef();
  const [isPlaying, setIsPlaying] = useState(false);
  const togglePlayPause = () => {
    setIsPlaying((prev) => !prev);
  };
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
      playAnimationRef.current = requestAnimationFrame(repeat);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(playAnimationRef.current);
    }
  }, [isPlaying, audioRef, repeat]);

  return (
    <div className="controls-wrapper">
      <div className="controls">
        <button >
          <IoPlaySkipBackSharp />
        </button>

        <button onClick={togglePlayPause}>
          {isPlaying ? <IoPauseSharp /> : <IoPlaySharp />}
        </button>

        <button>
          <IoPlaySkipForwardSharp />
        </button>
      </div>
    </div>
  );
};

export default Controls;
