import React, { useState } from "react";
import { Container, LoadingWrapper } from "./SubmitButton";

const SubmitButton = ({ children, type, ...rest }) => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // Simulei um atraso de 2 segundos antes de reverter o estado de loading
    setTimeout(() => {
      setLoading(false);

      // Lógica para enviar o formulário após a animação
      if (rest.onClick) {
        rest.onClick(); // Chama o manipulador de evento onClick passado para o botão
      }
    }, 2000);
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
      ) : (
        children
      )}
    </Container>
  );
};

export default SubmitButton;
