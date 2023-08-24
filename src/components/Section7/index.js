import React, { useState } from "react";
import {
  CtaButton,
  FormContainer,
  FormSection,
  FormSubtitle,
  FormTitle,
  InputGroup,
  Modal,
  ModalContent,
} from "./Section7";

const Form = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleConfirm = () => {
    console.log("Dados do formulário enviados para o console log");
    setModalOpen(false);
  };

  return (
    <FormSection>
      <FormTitle>Agende uma Aula Experimental</FormTitle>
      <FormSubtitle>
        Conheça nossa Metodologia na Prática sem Custos
      </FormSubtitle>
      <FormContainer onSubmit={handleSubmit}>
        <InputGroup>
          <label htmlFor="name">Nome:</label>
          <input type="text" id="name" name="name" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </InputGroup>
        <InputGroup>
          <label htmlFor="whatsapp">WhatsApp:</label>
          <input type="tel" id="whatsapp" name="whatsapp" />
        </InputGroup>
        <CtaButton type="submit">Começar Agora</CtaButton>
      </FormContainer>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <p>Confirme seus dados antes de prosseguir:</p>
            {/* Exibir os dados do formulário aqui */}
            <button onClick={handleConfirm}>Confirmar</button>
          </ModalContent>
        </Modal>
      )}
    </FormSection>
  );
};

export default Form;
