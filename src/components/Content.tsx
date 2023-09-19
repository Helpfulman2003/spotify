import React from 'react'
import DetailSong from './DetailSong'
import ListSong from './ListSong'
import { SongType } from './Context';

interface IProps {
    handleSetSong: (id: number) => void;
    song: SongType;
}

const Content:React.FC<IProps> = (props) => {
    const {song, handleSetSong} = props
    return (
        <div className='grid grid-cols-3 h-screen-navbar-player  bg-slate-700 overflow-hidden'>
            <DetailSong song={song}/>
            <ListSong handleSetSong={handleSetSong} song={song}/>
        </div>
    )
}

export default Content