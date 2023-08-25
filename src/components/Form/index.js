import React, { useState } from "react";
import {
  CtaButton,
  FormBox,
  FormContainer,
  FormSection,
  FormSubtitle,
  FormTitle,
  InputGroup,
  Modal,
  ModalContent,
} from "./Form";

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
    <FormSection id="cta-form">
      <FormBox>
        <FormTitle>Agende uma Aula Experimental</FormTitle>
        <FormSubtitle>
          Conheça nossa Metodologia na Prática sem Custos
        </FormSubtitle>
        <FormContainer onSubmit={handleSubmit}>
          <InputGroup>
            <label htmlFor="name">Nome:</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Digite seu nome..."
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="seuemail@edtech1985.com.br"
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="whatsapp">WhatsApp:</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              placeholder="(51)99999-9999"
            />
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
      </FormBox>
    </FormSection>
  );
};

export default Form;
