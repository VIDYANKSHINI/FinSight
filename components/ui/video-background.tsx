"use client";

import { useEffect, useRef } from "react";

export function VideoBackground({ src = "/background.mp4" }: { src?: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5; // Slow down the video to half speed
    }
  }, []);

  return (
    <>
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src={src} type="video/mp4" />
      </video>
      {/* Dark overlay to make content readable */}
      <div className="absolute inset-0 bg-black/40 z-0" />
    </>
  );
}
