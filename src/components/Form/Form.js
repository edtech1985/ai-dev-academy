import styled, { keyframes } from "styled-components";

export const FormSection = styled.section`
  background-color: var(--background2);
  text-align: center;
  width: 100%;
  max-width: 100vw;
  padding: 2rem 2rem 1rem;
  box-sizing: border-box;
`;

export const FormBox = styled.div`
  background: var(--background1);
  padding: 1rem 2rem;
  border-radius: 1.5rem;
  transition: background-color 1s ease-in-out, 1s ease-out;
  border: 5px solid transparent;

  &:hover {
    background-color: var(--background1);
    border: 5px solid var(--second-color);
    box-shadow: 0px 0px 10px 10px var(--third-color);
  }
`;

export const FormTitle = styled.h2`
  color: var(--text1);
  font-size: 1.5rem;
  margin: 1rem;
`;

export const FormSubtitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const InputGroup = styled.div`
  width: calc(25% - 1rem); /* Distribuir os elementos em 4 colunas */
  margin: 0.5rem;
  display: flex;
  flex-direction: column;
  color: var(--text1);
  align-items: center;

  label {
    margin: 0.5rem;
  }

  input {
    width: 90%;
    padding: 0.75rem;
    border: 1px solid var(--primary-color);
    border-radius: 10px;

    @media (max-width: 768px) {
      width: 50vw;
    }
  }
`;

export const CtaButton = styled.button`
  background-color: var(--background2);
  color: white;
  padding: 0.75rem 1rem;
  border-radius: 10px;
  border: 1px solid var(--primary-color);
  cursor: pointer;
  margin: 0.5rem;
  width: fit-content;
  align-self: last baseline;

  &:hover {
    background: var(--background5);
  }

  @media (max-width: 768px) {
    align-self: center;
  }
`;

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: hidden;
`;

const pulsate = keyframes`
  0%, 100% {
    border-color: var(--primary-color);
  }
  50% {
    border-color: var(--third-color);
  }
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 15px;
  width: 60vw;
  height: 50vh;
  margin: 0 auto;
  border: 10px solid;
  border-color: var(--fourth-color);
  animation: ${pulsate} 1.5s infinite;
  box-sizing: content-box;
`;

export const DivCenterModal = styled.div`
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;
