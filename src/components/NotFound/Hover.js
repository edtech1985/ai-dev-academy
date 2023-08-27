import styled from "styled-components";

export const StyledCenter = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin-top: 4rem;
  margin-bottom: 1rem;

  @keyframes rotate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }

  @media (max-width: 640px) {
    .center {
      flex-wrap: wrap;
      flex-direction: column;
    }
  }
`;
export const StyledOuterButton = styled.div`
  position: relative;
  margin: 0 0.75rem;
  background: var(--text2);
  height: 4rem;
  width: 15rem;
  border-radius: 2.5rem;
`;

export const Button = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: var(--background1);
  color: var(--text1);
  outline: none;
  border: none;
  font-size: 1rem;
  z-index: 9;
  letter-spacing: 0.1rem;
  cursor: pointer;
  height: 85%;
  width: 95%;
  border-radius: 2.5rem;

  &:hover {
    color: #f2f2f2;
  }
  @media (max-width: 480) {
    font-size: 1rem;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    font-size: 0.85rem;
  }
  @media (min-width: 769px) and (max-width: 999px) {
    font-size: 0.75rem;
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  height: 100%;
  width: 100%;
  background: var(--background2);
  border-radius: 50px;
  transition: all 0.3s ease;
  filter: blur(5px);

  ${StyledOuterButton}:hover & {
    filter: blur(14px);
  }

  ${Button}:hover + & {
    filter: blur(14px);
  }

  &:hover {
    background: linear-gradient(var(--text3), var(--text3), var(--text3));
    animation: rotate 1s linear infinite;
    filter: none;
  }
`;

export const HoverableSpan = styled(Span)`
  ${StyledOuterButton}:hover & {
    filter: blur(100px);
  }

  ${Button}:hover + & {
    filter: blur(10px);
    background: linear-gradient(var(--text2), var(--text2), var(--text2));
    animation: rotate 1s linear infinite;
  }
`;
