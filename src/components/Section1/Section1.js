import styled from "styled-components";

export const SectionContainer = styled.section`
  text-align: center;
  background-color: var(--background1);
  max-width: 100vw;
  margin-top: 3rem;
  padding: 1.5rem 0;

  @media (max-width: 480px) {
  }

  @media (min-width: 481px) and (max-width: 768px) {
    /* margin-top: 3rem; */
  }
`;

export const Title = styled.h1`
  font-size: 2rem;
  padding: 1rem;
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

export const DivTextLeft = styled.div`
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
  color: var(--text3);
`;

export const Text1 = styled.p`
  font-size: 1rem;
  color: var(--text1);

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

export const DivImgRight = styled.div`
  max-width: 100%;
  width: 200vw;

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

export const Image = styled.img`
  width: 100%;
`;
