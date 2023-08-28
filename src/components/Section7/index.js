import React, { useState } from "react";
import {
  SectionContainer,
  DivTextImg,
  Subtitle,
  StacksContainer,
  StackCard,
  Icon,
  StackContent,
} from "./Section7";
import {
  CloseButton,
  ModalContent,
  ModalOverlay,
  ModalText,
  ModalTitle,
} from "./Modal";
import stacksData from "./stacks.json";

const Section7 = () => {
  const [selectedStack, setSelectedStack] = useState(null);

  const openModal = (stack) => {
    setSelectedStack(stack);
  };

  const closeModal = () => {
    setSelectedStack(null);
  };

  const handleOutsideClick = (event) => {
    if (event.target === event.currentTarget) {
      closeModal();
    }
  };

  return (
    <SectionContainer id="stacks">
      <Subtitle>Escolha o caminho a trilhar</Subtitle>
      <DivTextImg>
        <StacksContainer>
          {stacksData.map((stack, index) => (
            <StackCard key={index} onClick={() => openModal(stack)}>
              <Icon className={stack.icone} aria-hidden="true" />
              <StackContent>
                <h3>{stack.titulo}</h3>
                <p>{stack.descricao}</p>
              </StackContent>
            </StackCard>
          ))}

          {selectedStack && (
            <ModalOverlay onClick={handleOutsideClick}>
              <ModalContent>
                <CloseButton onClick={closeModal}>Fechar</CloseButton>
                <ModalTitle>{selectedStack.titulo}</ModalTitle>
                <br />
                <ModalText>
                  <ul>
                    {selectedStack.itens.map((stack, index) => (
                      <li key={index}>{stack}</li>
                    ))}
                  </ul>
                </ModalText>
              </ModalContent>
            </ModalOverlay>
          )}
        </StacksContainer>
      </DivTextImg>
    </SectionContainer>
  );
};

export default Section7;
