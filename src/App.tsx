import React, { useContext, useState} from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import { SongContext, SongContextType, SongType } from './components/Context';
import Playing from './components/Playing';


function App() {
  const dataSong: SongContextType = useContext(SongContext)
  const [song, setSong] = useState<SongType>(dataSong.data[0])
  const handleSetSong = (id: number) => {
    const song = dataSong.data.find(data => data.id === id)
    if(!song) {
      setSong(dataSong.data[0])
    }else {
      setSong(song)
    }
  }
  return (
    <div className="">
      <Header />
      <Content song={song} handleSetSong={handleSetSong}/>
      <Playing song={song} handleSetSong={handleSetSong}/>
    </div>
  );
}

export default App;
