import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 1rem 0;
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
    padding-bottom: 0;
  }

  @media (min-width: 481px) and (max-width: 768px) {
    display: block;
    padding-bottom: 0;
  }
`;

export const DivLeft = styled.div`
  max-width: 50%;
  padding: 1rem;

  @media (max-width: 480px) {
    max-width: 100%;
    padding-top: 0;
  }
  @media (min-width: 481px) and (max-width: 600px) {
    max-width: 100%;
    padding-top: 0;
  }
  @media (min-width: 601px) and (max-width: 768px) {
    max-width: 100%;
    padding-top: 0;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;

export const DivRight = styled.div`
  max-width: 100%;
  padding-left: 0rem;
  padding-right: 0rem;

  @media (max-width: 768px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.5rem;
  padding: 0.5rem;
`;

export const TitleH3 = styled.h1`
  font-size: 1.25rem;
  padding: 1rem;

  @media (max-width: 480px) {
  }
  @media (min-width: 481px) and (max-width: 600px) {
    font-size: 1.5rem;
  }
  @media (min-width: 601px) and (max-width: 768px) {
    font-size: 1.75rem;
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }

  @media (min-width: 1201px) {
    font-size: 1.25rem;
  }
`;

export const Text1 = styled.p`
  font-size: 1rem;

  @media (max-width: 480px) {
    padding-bottom: 1rem;
  }
  @media (min-width: 481px) and (max-width: 600px) {
    font-size: 1.25rem;
  }
  @media (min-width: 601px) and (max-width: 768px) {
    font-size: 1.5rem;
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

export const BreakPointDivUp = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;
export const BreakPointDivDown = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;
