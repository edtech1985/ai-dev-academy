import React, { useState } from "react";
import {
  CtaButton,
  DivCenterModal,
  FormBox,
  FormContainer,
  FormSection,
  FormSubtitle,
  FormTitle,
  InputGroup,
  Modal,
  ModalContent,
} from "./Form";
import { SnakeCard } from "../SnakeCard/SnakeAnimation";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Form = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const { name, email, whatsapp } = formData;

  const handleSubmit = (e) => {
    e.preventDefault();
    setModalOpen(true);
  };

  const handleConfirm = () => {
    console.log("Dados do formulário enviados para o console log:", formData);
    setModalOpen(false);
    toast.success("Formulário enviado com sucesso!");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
              value={name}
              placeholder="Digite seu nome..."
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              placeholder="seuemail@edtech1985.com.br"
              onChange={handleInputChange}
            />
          </InputGroup>
          <InputGroup>
            <label htmlFor="whatsapp">WhatsApp:</label>
            <input
              type="tel"
              id="whatsapp"
              name="whatsapp"
              value={whatsapp}
              placeholder="(51)99999-9999"
              onChange={handleInputChange}
            />
          </InputGroup>{" "}
          <CtaButton type="submit">Começar Agora</CtaButton>
        </FormContainer>
        {isModalOpen && (
          <Modal>
            <ModalContent>
              <SnakeCard>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <DivCenterModal>
                  <p>Confirme seus dados antes de prosseguir:</p>
                  <p>Nome: {name}</p>
                  <p>Email: {email}</p>
                  <p>WhatsApp: {whatsapp}</p>
                  <button onClick={handleConfirm}>Confirmar</button>
                </DivCenterModal>
              </SnakeCard>
            </ModalContent>
          </Modal>
        )}
      </FormBox>
      <ToastContainer />
    </FormSection>
  );
};

export default Form;
