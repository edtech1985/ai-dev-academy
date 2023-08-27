import styled from "styled-components";

export const Container = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  background-color: var(--background2);
`;

export const BackDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const BackButton = styled.button`
  background: var(--background1);
  color: var(--text1);
  font-weight: 700;
  font-size: 1rem;
  padding: 1rem;
  margin: 1.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  width: 15rem;
  align-content: center;
  align-items: center;

  &:hover {
    background: var(--background2);
    transition: 1s ease-in-out;
    color: var(--text2);
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  max-height: 100vh;
  object-fit: fill;
`;
