import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 2rem 0;
  text-align: center;
  background-color: F2F2F2;
  color: var(--text2);
  max-width: 100vw;

  @media (max-width: 768px) {
    padding-bottom: 0;
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
  @media (min-width: 1201px) {
    font-size: 1.25rem;
  }
`;
