import React from "react";
import { useRef, useState } from "react";
import myvid from "../../assets/testvideo.mp4";
export default function VideoPlayer() {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (!isPlaying) {
            videoRef.current.play();
            setIsPlaying(!isPlaying);
        }
    };

    const handlePause = () => {
        if (isPlaying) {
            videoRef.current.pause();
            setIsPlaying(!isPlaying);
        }
    };

    return (
        <div>
            <video ref={videoRef} width="400" controls>
                <source
                    src={myvid} // Replace with the URL or path to your video file
                    type="video/mp4"
                />
                Your browser does not support the video tag.
            </video>
            <div className="video-buttons-div">
                <button onClick={handlePlay}>Play</button>
                <button onClick={handlePause}>Pause</button>
            </div>
        </div>
    );
}
