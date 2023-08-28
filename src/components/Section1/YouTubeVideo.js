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
    overflow: hidden;
    border-radius: 15px;
    position: relative;

    top: 0;
    left: 0;

    @media (max-width: 480px) {
      width: 100%;
      height: calc(480px * 9 / 16);
    }
    @media (min-width: 481px) and (max-width: 600px) {
      width: 100%;
      height: calc(481px * 9 / 16);
    }
    @media (min-width: 601px) and (max-width: 768px) {
      width: 100%;
      height: calc(601px * 9 / 16);
    }
    @media (min-width: 769px) and (max-width: 991px) {
      width: 100%;
      height: calc(70vw * 9 / 16);
    }
    @media (min-width: 992px) and (max-width: 1024px) {
      width: 100%;
      height: calc(50vw * 9 / 16);
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
      width: 100%;
      height: calc(70vw * 9 / 16);
    }
    @media (min-width: 1201px) {
      width: 100%;
      height: calc(70vw * 9 / 16);
    }
  }
`;

const YouTubeVideo = () => {
  return (
    <DivFrame>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/vG2pmoQK-8s"
        title="Sobre a AI Dev Academy"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </DivFrame>
  );
};

export default YouTubeVideo;
