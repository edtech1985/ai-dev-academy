import styled from "styled-components";
import banner from "../../assets/face-ai.jpg";

export const SectionContainer = styled.section`
  text-align: center;
  background: var(--background2);
  color: var(--text1);
  max-width: 100vw;
  padding-top: 4rem;

  @media (max-width: 480px) {
  }
  @media (min-width: 481px) and (max-width: 600px) {
  }
  @media (min-width: 601px) and (max-width: 768px) {
  }
  @media (min-width: 769px) and (max-width: 991px) {
  }
  @media (min-width: 992px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;

export const BackgroundImg = styled.div`
  width: 100%;
  max-width: 100vw;
  max-height: 100vh;
  background-image: url(${banner});
  background-size: cover;
  background-position: center;
`;

export const BannerImg = styled.img`
  width: 100%;
`;

export const DivText = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem;

  @media (max-width: 480px) {
    padding: 0.5rem;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    padding: 0.5rem;
  }
  @media (min-width: 601px) and (max-width: 768px) {
    padding: 1rem;
  }
  @media (min-width: 769px) and (max-width: 900px) {
    padding: 1rem;
  }
  @media (min-width: 901px) and (max-width: 1024px) {
    padding: 1rem;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    padding: 1rem;
  }

  @media (min-width: 1201px) {
    padding: 0.5rem;
  }
`;

export const DivTextLeft = styled.div`
  width: 60%;

  @media (max-width: 481px) {
    display: none;
  }
  @media (min-width: 481px) and (max-width: 600px) {
    display: none;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    display: none;
  }
  @media (min-width: 769px) and (max-width: 900px) {
    display: none;
  }
  @media (min-width: 901px) and (max-width: 1024px) {
    width: 50%;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }

  @media (min-width: 1201px) {
    width: 30%;
  }
`;

export const DivTextRight = styled.div`
  max-width: 40%;

  @media (max-width: 481px) {
    max-width: 100%;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
  @media (min-width: 481px) and (max-width: 600px) {
    max-width: 100%;
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    max-width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 769px) and (max-width: 900px) {
    max-width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 901px) and (max-width: 991px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 992px) and (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  @media (min-width: 1201px) {
    width: 100vw;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  padding: 1rem;
  min-height: 13vh;

  @media (max-width: 480px) {
    font-size: 1.25rem;
    min-height: 8vh;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 1.5rem;
    min-height: 10vh;
  }

  @media (min-width: 769px) and (max-width: 900px) {
    min-height: 12vh;
  }
  @media (min-width: 901px) and (max-width: 1024px) {
    min-height: 13vh;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    min-height: 12vh;
  }

  @media (min-width: 1201px) {
    min-height: 5vh;
  }
`;

export const Text1 = styled.p`
  font-size: 1rem;
  //new

  @media (max-width: 480px) {
    padding: 0.25rem;
    background-color: rgba(1, 21, 38, 0.75);
  }
  @media (min-width: 481px) and (max-width: 600px) {
    padding: 0.25rem;
    background-color: rgba(1, 21, 38, 0.75);
  }

  @media (min-width: 601px) and (max-width: 768px) {
    background-color: rgba(1, 21, 38, 0.75);
  }
  @media (min-width: 769px) and (max-width: 900px) {
    background-color: rgba(1, 21, 38, 0.75);
  }
  @media (min-width: 901px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media (min-width: 1201px) {
    padding-left: 1rem;
    padding-right: 1rem;
    font-size: 1.25rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
