import Player from './components/player';
import Song from './components/song';
import './styles/app.scss';
import data from './util';
import Library from './components/Library';
import { useState } from 'react';

function App() {
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  return (
    <div className="App">
      <Song currentSong={currentSong} />
      <Player
        setIsPlaying={setIsPlaying}
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;
