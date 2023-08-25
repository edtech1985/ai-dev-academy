import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.header`
  background-color: var(--background2);
  display: flex;
  padding: 0.5rem;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 50px;
  height: 2rem;
  transition: opacity 1s;
  z-index: 1000;
  opacity: ${(props) => (props.hovered ? 1 : 0.25)};
  align-items: center;
  justify-content: space-between;

  &:hover {
    opacity: 1;
  }
`;

export const Logo = styled.img`
  min-width: 48px;
  min-height: 48px;
  height: 100%;
  max-height: 2rem;
  transition: filter 1s ease-in-out, transform 1s ease-in-out;

  &:hover {
    filter: brightness(1.5);
    transform: scale(1.5);
  }
`;

export const BurgerMenuButton = styled.button`
  display: none;

  @media screen and (max-width: 600px) {
    display: block;
    position: absolute;
    top: 1rem;
    right: 3rem;
    z-index: 999;
    width: 2rem;
    height: 2rem;
    background-color: transparent;
    border: none;
    cursor: pointer;

    span {
      display: block;
      width: 3rem;
      height: 0.25rem;
      margin-bottom: 0.75rem;
      position: relative;
      background-color: white;
      border-radius: 15px;
      transform-origin: center;
      transition: transform 1.25s ease-out, opacity 1.25s ease-out;

      &:focus {
        outline: none;
      }

      &:first-child {
        transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      }

      &:nth-child(2) {
        opacity: ${({ open }) => (open ? "0" : "1")};
      }

      &:nth-child(3) {
        transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      }
    }
  }
`;

export const StyledNavbar = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 600px) {
    display: ${({ open }) => (open ? "flex" : "none")};
    position: absolute;
    top: 0;
    right: 0;
    flex-direction: column;
    background-color: var(--background2); //fundo burger open
    width: 100%;
    height: 100vh;
    padding-top: 1rem; // Adicione um padding para separar do topo
    z-index: 999;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;

  @media (max-width: 600) {
    display: block;
  }
`;

export const NavItem = styled.li`
  display: inline-block;
  margin: 0 1rem;

  @media (max-width: 600) {
    display: block;
  }
`;

export const StyledNavItem = styled(NavLink)`
  display: block;
  text-decoration: none;
  color: #f2f2f2;
  font-weight: bold;
  font-size: 1rem;
  padding-right: 1.5rem;

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 480px) {
    font-size: 1.75rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 481px) and (max-width: 600px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }

  @media (min-width: 601px) and (max-width: 768px) {
    padding-right: 1.25rem;
  }

  @media (min-width: 769px) and (max-width: 1024px) {
  }
  @media (min-width: 1025px) and (max-width: 1200px) {
  }
  @media (min-width: 1201px) {
  }
`;
