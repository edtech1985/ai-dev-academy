import React, { useState } from "react";
import { HeaderContainer, NavList, NavItem, NavLink } from "./Header";
const Header = () => {
  const [hovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <HeaderContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      hovered={hovered}
    >
      <nav>
        <NavList>
          <NavItem>
            <NavLink href="#home">Início</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#about">Sobre Nós</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#matricula">Matrícula</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#pilares">Pilares</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#cta-form">Agende</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#footer">Contatos</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
