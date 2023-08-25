import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: var(--background2);
  padding: 1rem 0;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  transition: background-color 1s, opacity 1s;
  z-index: 1000;
  opacity: ${(props) => (props.hovered ? 1 : 0.25)};

  &:hover {
    opacity: 1;
  }
`;

export const NavList = styled.ul`
  list-style: none;
  padding: 0;
`;

export const NavItem = styled.li`
  display: inline-block;
  margin: 0 15px;
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
