import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 2rem 0;
  text-align: center;
  background-color: F2F2F2;
  color: var(--text2);
  max-width: 100vw;
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
  }
  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }

  @media (min-width: 1201px) {
    font-size: 1.25rem;
  }
`;
