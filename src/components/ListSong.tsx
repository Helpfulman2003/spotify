import React, { useContext, useState, useEffect } from 'react';
import { FiDownload } from 'react-icons/fi';
import { SongContext, SongContextType, SongType } from './Context';

interface IProps {
    handleSetSong: (id: number) => void;
    song: SongType;
}

const ListSong: React.FC<IProps> = (props) => {
    const { handleSetSong, song } = props
    const dataSong: SongContextType = useContext(SongContext);
    const [idSong, setIdSong] = useState<number>(0); // Initialize idSong with null

    const handleClick = (song: SongType) => {
        setIdSong(song.id);
        handleSetSong(song.id)
    };

    useEffect(() => {
        setIdSong(song.id);
    }, [song])
    

    return (
        <div className="col-span-2">
            <div className="overflow-y-auto max-h-[400px]">
                <table className="table-auto w-full">
                    <thead className="h-12 text-white">
                        <tr>
                            <th className="w-[10%]">#</th>
                            <th className="text-left">Title</th>
                            <th className="text-center">Author</th>
                            <th className="w-[10%]">
                                <FiDownload size={16} />
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataSong.data.map((song: SongType, index: number) => (
                            <tr
                                key={song.id}
                                className={`h-12 bg-slate-800 text-gray-700 hover:bg-gray-600 hover:text-gray-800 ${idSong === song.id && "text-teal-400 bg-gray-600"
                                    }`}
                                onClick={() => handleClick(song)}
                            >
                                <td className="text-center">{song.id}</td>
                                <td className="">{song.name}</td>
                                <td className="text-center">{song.author}</td>
                                <td className="text-center">
                                    <FiDownload />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ListSong;
