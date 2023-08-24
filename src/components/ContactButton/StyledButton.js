import styled from "styled-components";

export const StyledContactButton = styled.a`
  display: inline-block;
  background-color: green;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 2rem;
  text-decoration: none;
  font-weight: bold;
  margin: 1rem;
  cursor: pointer;
  transition: background-color 1s ease-in-out, 1s ease-out;
  border: 2px solid transparent;

  &:hover {
    background-color: var(--background5);
    color: var(--text1);
    border: 2px solid var(--second-color);
    box-shadow: 0px 0px 6px 6px var(--third-color);
  }
`;
