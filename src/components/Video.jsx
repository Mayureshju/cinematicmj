import React, { useState } from "react";
import YouTube from "react-youtube";
import Img from "../img/portfolio/5.png";
const Video = () => {
  const videoId = "zMR_NI7zISE"; // Replace with the actual video ID
  const [showThumbnail, setShowThumbnail] = useState(true);
  const opts = {
    height: "200",
    width: "340",
    playerVars: {
      autoplay: 1,
      modestbranding: 1, // Hide YouTube logo
      showinfo: 0, // Hide video title and uploader info
      controls: 0, // Hide video controls
      mute: 1, // Mute the video
      playsinline: 1, // Play inline on supported devices
      rel: 0, // Hide related videos at the end
      fs: 0, // Disable fullscreen button
    },
  };

  const onReady = (event) => {
    // The video is ready to play, hide the thumbnail
    setShowThumbnail(false);
    // You can also do any additional actions here when the video is ready
  }

  return (
    <section className="overflow-auto">
      <div className="flex flex-wrap">
        <div className="mt-40 ml-[1.5rem] flex flex-wrap gap-10 lg:ml-36  md:ml-24 overflow-hidden">
        {showThumbnail && (
            <img
              className="shadow-2xl"
              src={Img}
              alt="Thumbnail"
              width={340}
              height={200}
            />
          )}
          <YouTube
            className={`shadow-2xl ${showThumbnail ? "hidden" : ""}`}
            loading="lazy"
            videoId={videoId}
            opts={opts}
            onReady={onReady}
          />

{showThumbnail && (
            <img
              className="shadow-2xl"
              src={Img}
              alt="Thumbnail"
              width={340}
              height={200}
            />
          )}
          <YouTube
            className={`shadow-2xl ${showThumbnail ? "hidden" : ""}`}
            loading="lazy"
            videoId={videoId}
            opts={opts}
            onReady={onReady}
          />

{showThumbnail && (
            <img
              className="shadow-2xl"
              src={Img}
              alt="Thumbnail"
              width={340}
              height={200}
            />
          )}
          <YouTube
            className={`shadow-2xl ${showThumbnail ? "hidden" : ""}`}
            loading="lazy"
            videoId={videoId}
            opts={opts}
            onReady={onReady}
          />
           
        </div>
      </div>
    </section>
  );
};

export default Video;
