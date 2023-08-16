import React from "react";
import { Media, Video } from "@vidstack/player-react";
import Img from "../img/portfolio/5.png";
const Video = () => {
  // const videoId = "zMR_NI7zISE"; // Replace with the actual video ID

  // // You can customize the options for the YouTube player
  // const opts = {
  //   height: "200",
  //   width: "340",
  //   playerVars: {
  //     autoplay: 1,
  //     mute: true,
  //     modestbranding: 1, // Hide YouTube logo
  //     showinfo: 0,
  //   },
  // }; <YouTube
  //           className="shadow-2xl"
  //           loading="lazy"
  //           videoId={videoId}
  //           opts={opts}
  //         />
  return (
    <section className="overflow-auto">
      <div className="flex flex-wrap">
        <div className="mt-40 ml-[1.5rem] flex flex-wrap gap-10 lg:ml-36  md:ml-24 overflow-hidden">
          <Media>
            <Video loading="visible" poster={Img} controls preload="true">
              <video
                loading="visible"
                poster={Img}
                src="https://youtu.be/fwwOkyKpBDM"
                preload="none"
                data-video="0"
                controls
              />
               <video
                loading="visible"
                poster={Img}
                src="https://youtu.be/fwwOkyKpBDM"
                preload="none"
                data-video="0"
                controls
              />
            </Video>
          </Media>
     
        </div>
      </div>
    </section>
  );
};

export default Video;
