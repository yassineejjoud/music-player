import { BsMusicNoteBeamed } from "react-icons/bs";
const DisplayTrack = ({
  currentTrack,
  audioRef,
  setDuration,
  progressBarRef,
}) => {
  const onLoadedMetadata = () => {
    const seconds = audioRef.current.duration;
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  };
  return (
    <div>
      <audio controls ref={audioRef} onLoadedMetadata={onLoadedMetadata}>
        <source src={currentTrack.audio} />
      </audio>
      <div className="audio-info">
        <div className="audio-image">
          {currentTrack.cover ? (
            <img src={currentTrack.cover} alt="audio avatar" />
          ) : (
            <div className="icon-wrapper">
              <span className="audio-icon">
                <BsMusicNoteBeamed />
              </span>
            </div>
          )}
        </div>
        <div className="text">
          <p className="title">{currentTrack.name}</p>

        </div>
      </div>
    </div>
  );
};
export default DisplayTrack;
