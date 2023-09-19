import React, { ReactNode, createContext, useState } from 'react';
import DataSong from '../data/song.json';

export interface SongType {
  name: string;
  author: string;
  url: string;
  id: number;
  links: { images: Image[] };
}

interface Image {
  url: string;
}

export interface SongContextType {
  data: SongType[];
  // song: SongType;
  // handleSetSong: React.Dispatch<React.SetStateAction<SongType>>;
}

const defaultSongContextValue: SongContextType = {
  data: DataSong,
  // song: DataSong[0],
  // handleSetSong:() => {}
};

export const SongContext = createContext<SongContextType>(defaultSongContextValue);

const Context: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <SongContext.Provider value={defaultSongContextValue}>
      {children}
    </SongContext.Provider>
  );
};

export default Context;
