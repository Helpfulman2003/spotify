import React from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { SongType } from "./Context";

interface IProps {
    song: SongType
    handleSetSong: (id: number) => void
}

const Playing: React.FC<IProps> = (props) => {
    const {song, handleSetSong} = props
  return (
    <div>
      <AudioPlayer
        className="player-music"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={() => {handleSetSong(song.id + 1)}}
        onClickPrevious={() => {handleSetSong(song.id - 1)}}
      />
    </div>
  );
};

export default Playing;
