import React from 'react'
import { SongType } from './Context';

interface IProps {
  song: SongType;
}


const DetailSong:React.FC<IProps> = (props) => {
  const {song} = props
  return (
    <div className='col-span-1'>
        <p className='text-[16px] text-[#06b6d4] font-bold'>Now playing</p>
        <h1 className='text-neutral-400 text-2xl'>Sing me to sleep</h1>
        <div>
            <img src={song.links.images[0].url} alt="" className='w-[240px] m-auto mt-10'/>
        </div>
        <div className="flex justify-evenly items-center mt-10">
            <div className='mr-10'>
                <img src={song.links.images[1].url} alt="" className='w-[70px] h-[70px] rounded-full '/>
            </div>
            <span className='text-xl text-white'>{song.author}</span>
        </div>
    </div>
  )
}

export default DetailSong