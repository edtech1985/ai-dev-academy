import React, { useState } from "react";
import {
  HeaderContainer,
  Logo,
  BurgerMenuButton,
  StyledNavbar,
  StyledNavItem,
} from "./Header";
import logoImage from "../../assets/logo.png";
import { scroller } from "react-scroll";

const Header = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleNavItemClick = (section) => {
    setIsOpen(false);
    scroller.scrollTo(section, {
      duration: 1500, // Duração da animação de scroll
      delay: 10,
      smooth: "easeInOutQuart",
      offset: -50, // offset para alinhar seção
    });
  };

  return (
    <HeaderContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      hovered={hovered}
    >
      <Logo src={logoImage} alt="Logo da AI Dev Academy" />

      <BurgerMenuButton
        id="BurgerButtonMenu"
        open={isOpen}
        onClick={handleMenuClick}
      >
        <span></span>
        <span></span>
        <span></span>
      </BurgerMenuButton>

      <StyledNavbar open={isOpen}>
        <StyledNavItem onClick={() => handleNavItemClick("home")}>
          Início
        </StyledNavItem>

        <StyledNavItem onClick={() => handleNavItemClick("about")}>
          Sobre Nós
        </StyledNavItem>

        <StyledNavItem onClick={() => handleNavItemClick("matricula")}>
          Matrícula
        </StyledNavItem>

        <StyledNavItem onClick={() => handleNavItemClick("pilares")}>
          Pilares
        </StyledNavItem>

        <StyledNavItem onClick={() => handleNavItemClick("cta-form")}>
          Agende
        </StyledNavItem>

        <StyledNavItem onClick={() => handleNavItemClick("footer")}>
          Contatos
        </StyledNavItem>
      </StyledNavbar>
    </HeaderContainer>
  );
};

export default Header;
