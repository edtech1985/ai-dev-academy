import React from "react";
import { styled } from "styled-components";

const DivFrame = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  z-index: 100;
  width: 100%;
  height: auto;
  overflow: hidden;

  iframe {
    border-radius: 15px;
  }
`;

const YouTubeVideo = () => {
  return (
    <DivFrame>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/T-A-cSpqYQE"
        title="Entenda como funcionam nossos 4 pilares para um resultado rápido e eficaz"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </DivFrame>
  );
};

export default YouTubeVideo;
