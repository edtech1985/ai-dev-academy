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

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SubmitButton from "./SubmitButton";

const Form = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    whatsapp: "",
  });

  const { name, email, whatsapp } = formData;

  const validateName = (name) => name.length >= 3;
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const validatePhone = (phone) => /^\d{11}$/.test(phone);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateName(name)) {
      toast.error("O nome deve ter pelo menos 3 caracteres.");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Digite um email válido.");
      return;
    }

    if (!validatePhone(whatsapp)) {
      toast.error("Digite um telefone válido.");
      return;
    }

    setModalOpen(true);
  };

  const handleConfirm = () => {
    console.log("Dados do formulário enviados para o console log:", formData);

    toast.success("Formulário enviado com sucesso!");
    setTimeout(() => {
      setModalOpen(false);
    }, 3000);
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
              <DivCenterModal>
                <p>Confirme seus dados antes de prosseguir:</p>
                <br />
                <p>Nome: {name}</p>
                <p>Email: {email}</p>
                <p>WhatsApp: {whatsapp}</p>
                <br />
                <SubmitButton onClick={handleConfirm}>Confirmar</SubmitButton>
              </DivCenterModal>
            </ModalContent>
          </Modal>
        )}
      </FormBox>
      <ToastContainer />
    </FormSection>
  );
};

export default Form;
