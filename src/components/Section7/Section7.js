import styled from "styled-components";

export const SectionContainer = styled.section`
  padding: 1rem 0;
  text-align: center;
  background-color: var(--background2);
  max-width: 100vw;
`;

export const DivTextImg = styled.div`
  display: flex;
  padding: 1rem;
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
  color: var(--text1);
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

export const StacksContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
  @media (min-width: 769px) and (max-width: 991px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (min-width: 992px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StackCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 2px solid var(--text1);
  padding: 1rem;

  cursor: pointer;
  transition: background-color 1s ease-in-out, 1s ease-out;

  &:hover {
    background-color: var(--background5);
    color: var(--text1);
    border: 2px solid var(--second-color);
    box-shadow: 0px 0px 10px 10px var(--primary-color);
  }
`;

export const StackContent = styled.div`
  flex: 1;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    padding: 1rem;
    color: var(--text1);
  }

  p {
    padding: 1rem;
    font-size: 1rem;
    color: var(--text1);

    @media (max-width: 480px) {
      padding-bottom: 1rem;
    }
    @media (min-width: 1201px) {
      font-size: 1.25rem;
    }
  }
`;

export const Icon = styled.i`
  font-size: 48px;
  color: var(--text1);
  padding: 1rem;

  ${StackCard}:hover & {
    color: var(--text3);
  }
`;
