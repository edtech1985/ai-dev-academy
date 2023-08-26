import styled from "styled-components";

export const StyledContactButton = styled.a`
  display: inline-block;
  position: relative;
  background-color: green;
  color: #fff;
  padding: 1rem 2rem;
  margin: 1rem;
  border-radius: 2rem;
  border: 2px solid transparent;
  text-decoration: none;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 1s ease-in-out, 1s ease-out;

  &:before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    border: 2px solid #f2f2f2;
    border-radius: 2rem;
  }

  &:hover {
    background-color: var(--background5);
    color: var(--text1);
    border: 2px solid var(--second-color);
    box-shadow: 0px 0px 10px 10px var(--primary-color);
  }
`;
