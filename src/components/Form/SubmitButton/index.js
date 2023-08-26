import React, { useState } from "react";
import { Container, LoadingWrapper } from "./SubmitButton";
import { CheckmarkSVG } from "./CheckmarkSVG";

const SubmitButton = ({ children, type, ...rest }) => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // Simulei um atraso de 2 segundos antes de reverter o estado de loading
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);

      // Lógica para enviar o formulário após a animação
      if (rest.onClick) {
        rest.onClick(); // Chama o manipulador de evento onClick passado para o botão
      }
    }, 1500);
  };

  return (
    <Container
      type={type}
      {...rest}
      disabled={loading}
      onClick={handleClick} // Adicione este manipulador de eventos
    >
      {loading ? (
        <LoadingWrapper>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </LoadingWrapper>
      ) : completed ? (
        <CheckmarkSVG />
      ) : (
        children
      )}
    </Container>
  );
};

export default SubmitButton;
