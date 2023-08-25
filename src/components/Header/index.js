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
            <NavLink href="#section2">Cursos</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section3">Professores</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section4">Contato</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#section5">Footer</NavLink>
          </NavItem>
        </NavList>
      </nav>
    </HeaderContainer>
  );
};

export default Header;
