import React from "react";
import YouTube from "react-youtube";

const YouTubeAPI = () => {
  const videoId = "https://youtube.com/embed/EI26vKEfzto";
  const opts = {
    height: "315",
    width: "560",
    playerVars: {
      autoplay: 0, // Pode ser 1 para autoplay
      key: "AIzaSyDNPwutelyrUtlDNo7mVRvu2zzXVBr9r60",
    },
  };

  return (
    <div>
      <h2>Meu Vídeo do YouTube</h2>
      <YouTube videoId={videoId} opts={opts} />
    </div>
  );
};

export default YouTubeAPI;
