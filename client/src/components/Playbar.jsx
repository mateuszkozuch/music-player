import { useState } from "react";
import PlaylistCard from "./PlaylistCard";

export default function Playbar() {
    const [isPlaying, setPlaying] = useState(false);

    const togglePlayPause = () => setPlaying(prev => !prev);

    return (
        <footer className="p-2 flex items-center h-[10vh] w-full justify-between">
            <div className="w-1/5">
                <PlaylistCard
                    image_source="https://cdn-images.dzcdn.net/images/cover/2e5851a2c564ca9795e169e29cc38393/0x1900-000000-80-0-0.jpg"
                    title="Trójkąt"
                    creator="Taco Hemingway"
                />
            </div>
            <div className="w-full flex flex-col items-center gap-3">
                <div className="flex gap-4">
                    <img src="icons/back.png" className="invert-100 h-[1.5rem] cursor-pointer" />
                    <img 
                        src={isPlaying ? 'icons/pause.png' : 'icons/play.png'} 
                        className="invert-100 h-[1.5rem] cursor-pointer" 
                        onClick={togglePlayPause} 
                    />
                    <img src="icons/next.png" className="invert-100 h-[1.5rem] cursor-pointer" />
                </div>
                <input type="range" className="w-full" min="0" max="100" />
            </div>
            <div className="w-1/5"></div>
        </footer>
    );
}