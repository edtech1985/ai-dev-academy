import styled from "styled-components";

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

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  display: inline-block;
  margin: 0 1rem;
`;

export const NavLink = styled.a`
  text-decoration: none;
  color: #f2f2f2;
  font-weight: bold;
  font-size: 1rem;

  &:hover {
    color: var(--primary-color);
  }

  @media (max-width: 400px) {
    font-size: 0.4rem;
  }

  @media (min-width: 401px) and (max-width: 550px) {
    font-size: 0.5rem;
  }

  @media (min-width: 551px) and (max-width: 768px) {
    font-size: 0.75rem;
  }
`;
