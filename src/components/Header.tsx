import React from 'react'
import { BsSpotify } from "react-icons/bs";

const Header = () => {
  return (
    <div className='leading-[6rem] h-24 flex justify-center items-center bg-slate-900 text-white gap-5'>
        <BsSpotify size={"30px"}/>
        <div className='text-3xl'>Spotify</div>
    </div>
  )
}

export default Header