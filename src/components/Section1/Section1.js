import styled from "styled-components";

export const SectionContainer = styled.section`
  text-align: center;
  background-color: var(--background1);
  max-width: 100vw;
  padding: 1rem 0;
`;

export const DivTextImg = styled.div`
  display: flex;
  padding: 2rem;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
    padding: 1rem;
  }
`;

export const DivLeft = styled.div`
  max-width: 50%;
  padding: 1rem;

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const DivRight = styled.div`
  max-width: 100%;
  padding-left: 0rem;
  padding-right: 0rem;

  @media (min-width: 481px) and (max-width: 768px) {
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;

export const Subtitle = styled.h2`
  font-size: 1.75rem;
  padding: 0.5rem;
  color: var(--text3);
`;

export const Text1 = styled.p`
  font-size: 1rem;
  color: var(--text1);

  @media (max-width: 480px) {
    padding-bottom: 1rem;
    line-height: 1.5rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    padding-bottom: 1rem;
    line-height: 1.75rem;
  }
  @media (min-width: 1025px) {
    font-size: 1.25rem;
  }
`;

export const Image = styled.img`
  width: 100%;
`;
