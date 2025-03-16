import PlaylistCard from "./PlaylistCard"
import { songs } from "../!data_for_test/songs"
import {useState} from "react"

export default function Library()
{
    const [isLibraryFolded, foldLibrary] = useState(false)

    const categories = [
        "Discover",
        "Your Playlists",
        "Liked songs",
    ]
    const categoriesItems = songs.map(item => {
        return <PlaylistCard
            key={item.id}
            title={isLibraryFolded ? '' : item.title}
            creator={isLibraryFolded ? '' : item.creator}
            image_source={item.image_source}
        />
    })

    return (
        <div className="flex flex-col gap-1 bg-gray-900 rounded-xl p-2 h-full">
            <div className="flex items-center justify-between p-1">
                <img src="/icons/folder.svg"
                    className="h-[2rem] invert-100 cursor-pointer" />
                <h1 className={`text-white text-2xl font-bold`}>{!isLibraryFolded && 'Library'}</h1>
                <img src="/icons/turn_arrow.svg"
                    onClick={() => {foldLibrary(!isLibraryFolded)}}
                    className={`h-[2rem] invert-100 cursor-pointer ${isLibraryFolded ? "rotate-180" : ""}`} />
            </div>
            <div className={`flex flex-col h-full gap-1 w-full ${isLibraryFolded ? 'items-center' : 'items-left'}`}>
                <PlaylistCard title={isLibraryFolded ? '' : 'Liked Songs'} creator={isLibraryFolded ? '' : 'user213'} image_source={`likedSongs.png`}/>
                {categoriesItems}
            </div>
        </div>
    )
}