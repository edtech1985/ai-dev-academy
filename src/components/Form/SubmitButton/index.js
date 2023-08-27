import React, { useState } from "react";
import { Container, LoadingWrapper } from "./SubmitButton";
import { CheckmarkSVG } from "./CheckmarkSVG";

const SubmitButton = ({ children, type, ...rest }) => {
  const [loading, setLoading] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleClick = () => {
    setLoading(true);

    // delay estado de loading
    setTimeout(() => {
      setLoading(false);
      setCompleted(true);

      if (rest.onClick) {
        rest.onClick(); // Chama onClick do botão
      }
    }, 1500);
  };

  return (
    <Container type={type} {...rest} disabled={loading} onClick={handleClick}>
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
