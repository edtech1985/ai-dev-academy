import React from "react";

const YouTubeVideo = () => {
  return (
    <div>
      <h2>Professor</h2>
      <iframe
        width="560"
        height="315"
        src="https://youtube.com/embed/EI26vKEfzto"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YouTubeVideo;
