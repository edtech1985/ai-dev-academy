import styled, { keyframes } from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.75);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const pulsate = keyframes`
  0%, 100% {
    border-color: var(--text1);
  }
  50% {
    border-color: var(--text3);
  }
`;

export const ModalContent = styled.div`
  background-color: var(--background1);
  padding: 1rem;
  border-radius: 15px;

  box-shadow: 2px 4px 16px rgba(191, 156, 90, 0.5);
  width: 36rem;
  max-height: 85vh;
  overflow: auto;
  position: relative;
  margin: 0 auto;
  align-items: center;
  text-align: center;
  border: 5px solid;
  border-color: var(--text1);
  animation: ${pulsate} 1.5s infinite;

  @media (min-width: 769px) and (max-width: 999px) {
    width: 70vw;
  }

  @media (max-width: 481px) {
    width: 80vw;
  }
`;

export const ModalTitle = styled.h2`
  color: var(--text1);
  margin-top: 0.75rem;
`;

export const ModalSubTitle = styled.p`
  color: #f2f2f2;
  margin-top: 0.5rem;
`;

export const ModalText = styled.p`
  color: #f2f2f2;
  margin-bottom: 0.5rem;
`;

export const ProductImage = styled.img`
  max-width: 100%;
  max-height: 15rem;
  margin: 1rem;
  border-radius: 15px;
`;

export const CloseButton = styled.button`
  background-color: transparent;
  color: #f2f2f2;
  border: none;
  position: absolute;
  font-size: 1.25rem;
  top: 10px;
  right: 10px;

  cursor: pointer;

  &:hover {
    color: var(--text3);
  }
`;
