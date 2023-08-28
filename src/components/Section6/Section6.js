import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 1rem;
  text-align: center;
  background-color: var(--background1);
  max-width: 100vw;
`;

export const DivTextImg = styled.div`
  display: flex;
  padding: 1rem 0;
  align-items: center;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const DivLeft = styled.div`
  max-width: 100%;

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
