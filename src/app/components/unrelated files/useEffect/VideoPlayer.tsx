import { useEffect, useRef } from "react";

interface Player {
    src: string,
    isPlaying: boolean,
}

const VideoPlayer = ({src, isPlaying}: Player) => {
    const ref = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        if (isPlaying) {
            ref.current?.play();
        } else {
            ref.current?.pause();
        }
    });

    return <video ref={ref} src={src} loop playsInline />;
}

export default VideoPlayer;