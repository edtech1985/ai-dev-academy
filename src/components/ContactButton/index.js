import React from "react";
import { StyledContactButton } from "./StyledButton";
import { Link } from "react-router-dom";

const ContactButton = ({ link, text }) => {
  // Verifica se o link é uma âncora (começa com #) ou uma URL
  const isAnchorLink = link.startsWith("#");

  return (
    <StyledContactButton
      as={isAnchorLink ? "a" : Link} // Usar "a" para âncoras e Link para URLs
      to={isAnchorLink ? undefined : link} // Ignora se for âncora
      href={isAnchorLink ? link : undefined} // Ignora se for URL
      target={isAnchorLink ? "_self" : "_blank"} // Define o comportamento do alvo
      rel={isAnchorLink ? undefined : "noopener noreferrer"}
    >
      {text}
    </StyledContactButton>
  );
};

export default ContactButton;
