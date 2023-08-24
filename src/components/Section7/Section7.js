import styled from "styled-components";

export const FormSection = styled.section`
  width: 100%;
`;

export const FormTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

export const FormSubtitle = styled.h3`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputGroup = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin-bottom: 0.5rem;
  }

  input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
`;

export const CtaButton = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export const Modal = styled.div`
  background-color: rgba(0, 0, 0, 0.5);
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
  padding: 2rem;
  border-radius: 5px;
`;
