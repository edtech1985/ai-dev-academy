import styled from "styled-components";

export const FormSection = styled.section`
  background-color: var(--background2);
  text-align: center;
  width: 100%;
  max-width: 100vw;
  padding: 2rem 2rem;
  box-sizing: border-box;
`;

export const FormBox = styled.div`
  background: var(--background1);
  padding: 2rem 2rem;
  border-radius: 1.5rem;
  transition: background-color 1s ease-in-out, 1s ease-out;
  border: 2px solid transparent;

  &:hover {
    background-color: var(--background1);
    border: 2px solid var(--second-color);
    box-shadow: 0px 0px 10px 10px var(--third-color);
  }
`;

export const FormTitle = styled.h2`
  color: var(--text1);
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const FormSubtitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 481px) and (max-width: 600px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 601px) and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  @media (min-width: 769px) and (max-width: 991px) {
  }
  @media (min-width: 992px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
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

    @media (max-width: 480px) {
      width: 50vw;
    }
    @media (min-width: 481px) and (max-width: 600px) {
      width: 50vw;
    }
    @media (min-width: 601px) and (max-width: 768px) {
      width: 50vw;
    }
    @media (min-width: 769px) and (max-width: 991px) {
      width: 50vw;
    }
    @media (min-width: 992px) and (max-width: 1024px) {
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
    }
    @media (min-width: 1201px) {
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

  @media (max-width: 480px) {
    align-self: center;
  }
  @media (min-width: 481px) and (max-width: 600px) {
    align-self: center;
  }
  @media (min-width: 601px) and (max-width: 768px) {
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
`;

export const ModalContent = styled.div`
  background-color: white;
  padding: 3rem;
  border-radius: 10px;
  width: 60vw;
  height: 50vh;
`;

export const DivCenterModal = styled.div`
  justify-content: center;
  align-items: center;
  padding: 3rem;
`;
