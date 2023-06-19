import { useEffect, useState, useRef } from "react";

import "./App.css";
import AudioPlayer from "./components/audioPlayer";
import { v4 as uuidv4 } from "uuid";
function App() {
  const tracks = () => {
    return [
      {
        name: "Beaver Creek",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
        color: ["#205950", "#2ab3bf"],
        id: uuidv4(),
        active: true,
      },
      {
        name: "Daylight",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9272",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
      },
      {
        name: "Keep Going",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        artist: "Swørn",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9222",
        color: ["#CD607D", "#c94043"],
        id: uuidv4(),
        active: false,
      },
      {
        name: "Nightfall",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ef95e219a44869318b7806e9f0f794a1f9c451e4-1024x1024.jpg",
        artist: "Aiguille",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9148",
        color: ["#EF8EA9", "#ab417f"],
        id: uuidv4(),
        active: false,
      },
      {
        name: "Reflection",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg",
        artist: "Swørn",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=9228",
        color: ["#CD607D", "#c94043"],
        id: uuidv4(),
        active: false,
      },
      {
        name: "Under the City Stars",
        cover:
          "https://chillhop.com/wp-content/uploads/2020/09/0255e8b8c74c90d4a27c594b3452b2daafae608d-1024x1024.jpg",
        artist: "Aso, Middle School, Aviino",
        audio: "https://mp3.chillhop.com/serve.php/?mp3=10074",
        color: ["#205950", "#2ab3bf"],
        id: uuidv4(),
        active: false,
      },
      //ADD MORE HERE
    ];
  };
  const [tracksList, setTracksList] = useState(tracks());
  const [currentTrack, setCurrentTrack] = useState(tracksList[0]);

  const onTrackClick = (index) => {
    setCurrentTrack(tracksList[index]);
  };
 

  return (
    <div className="container">
      <div className="side-list">
        {tracksList.map((track, index) => {
          return (
            <div
              key={track.id}
              className="track-item"
              onClick={() => onTrackClick(index)}
            >
              <img src={track.cover} alt="audio avatar" />
              <div className="track-info">
                <p className="name">{track.name}</p>
                <p className="title">{track.artist}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="player-container">
        <AudioPlayer
          currentTrack={currentTrack}
        ></AudioPlayer>
      </div>
    </div>
  );
}

export default App;
