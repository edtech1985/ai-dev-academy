import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 2rem 0;
  text-align: center;
  background-color: F2F2F2;
  color: var(--text3);
  max-width: 100vw;
`;

export const DivTextImg = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;

  @media (max-width: 480px) {
    display: block;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    display: block;
  }
`;

export const DivLeft = styled.div`
  max-width: 100%;

  @media (min-width: 481px) and (max-width: 768px) {
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (min-width: 1201px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  padding: 0.5rem;
`;

export const TitleH3 = styled.h1`
  font-size: 1.25rem;
  padding: 1rem;
`;

export const Text1 = styled.p`
  font-size: 1rem;

  @media (max-width: 480px) {
    padding-bottom: 1rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }

  @media (min-width: 1201px) {
    font-size: 1.25rem;
  }
`;

export const DivRight = styled.div`
  max-width: 100%;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    padding-left: 1rem;
    padding-right: 1rem;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    padding-left: 3rem;
    padding-right: 3rem;
  }

  @media (min-width: 1201px) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export const ContactButton = styled.a`
  display: inline-block;
  background-color: green;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: bold;
  margin: 1rem;

  &:hover {
    background-color: lightgreen;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const SnakeCard = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background: transparent;
  z-index: 100;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 15px;

  span {
    &:nth-of-type(1) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right, transparent, var(--background3));
      animation: animate1 2s linear infinite;
    }

    &:nth-of-type(2) {
      position: absolute;
      top: 0;
      right: 0;
      width: 3px;
      height: 100%;
      background: linear-gradient(to bottom, transparent, var(--second-color));
      animation: animate2 2s linear infinite;
      animation-delay: 1s;
    }

    &:nth-of-type(3) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(to left, transparent, var(--second-color));
      animation: animate3 2s linear infinite;
    }

    &:nth-of-type(4) {
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: linear-gradient(to top, transparent, var(--second-color));
      animation: animate4 2s linear infinite;
      animation-delay: 1s;
    }

    @keyframes animate1 {
      0% {
        transform: translateX(-100%);
      }

      100% {
        transform: translateX(100%);
      }
    }

    @keyframes animate2 {
      0% {
        transform: translateY(-100%);
      }

      100% {
        transform: translateY(100%);
      }
    }

    @keyframes animate3 {
      0% {
        transform: translateX(100%);
      }

      100% {
        transform: translateX(-100%);
      }
    }

    @keyframes animate4 {
      0% {
        transform: translateY(100%);
      }

      100% {
        transform: translateY(-100%);
      }
    }
  }
`;
