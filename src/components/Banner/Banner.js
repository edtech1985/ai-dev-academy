import styled from "styled-components";
import banner from "../../assets/face-ai.jpg";

export const SectionContainer = styled.section`
  text-align: center;
  background-color: var(--background2);
  color: var(--text1);
  max-width: 100vw;
  margin-top: 3rem;

  @media (max-width: 480px) {
  }

  @media (min-width: 481px) and (max-width: 768px) {
    /* margin-top: 3rem; */
  }
`;

// export const BackgroundImg = styled.div`;
//   width: 100%;
//   max-width: 100vw;
// `;

export const BackgroundImg = styled.div`
  width: 100%;
  max-width: 100vw;
  height: 100vh;
  background-image: url(${banner});
  background-size: cover; /* Garante que a imagem cubra todo o espaço */
  background-position: center; /* Centraliza a imagem */
`;

export const BannerImg = styled.img`
  width: 100%;
`;

// old

export const DivText = styled.div`
  display: flex;
  justify-content: space-between; /* Isso alinha os elementos à esquerda e à direita */
  padding: 2rem;

  @media (max-width: 480px) {
    display: block;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    display: block;
  }

  /* 
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  } */
`;

export const DivTextLeft = styled.div`
  width: 60%;

  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 100%;
    padding-left: 0;
    margin-top: 1rem;
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

export const DivTextRight = styled.div`
  max-width: 40%;

  @media (min-width: 481px) and (max-width: 768px) {
    max-width: 100%;
    padding-left: 0;
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

export const Title = styled.h1`
  font-size: 2rem;
  padding: 1rem;
  min-height: 20vh;

  @media (min-width: 481px) and (max-width: 768px) {
    margin-top: 1rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
    min-height: 12vh;
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
    min-height: 12vh;
  }

  @media (min-width: 1201px) {
    min-height: 5vh;
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  padding: 0.5rem;
`;

export const Text1 = styled.p`
  font-size: 1rem;

  @media (max-width: 480px) {
    padding-bottom: 1rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    background-color: rgba(1, 21, 38, 0.75);
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }

  @media (min-width: 1201px) {
    font-size: 1.25rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
