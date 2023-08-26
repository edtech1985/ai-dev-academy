import styled from "styled-components";

export const SnakeCard = styled.div`
  margin-left: auto;
  margin-right: auto;
  position: relative;
  background: transparent;
  z-index: 100;
  width: 100%;
  height: auto;
  overflow: hidden;
  border-radius: 15px;

  span {
    &:nth-of-type(1) {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(to right, transparent, var(--primary-color));
      animation: animate1 2s linear infinite;
    }

    &:nth-of-type(2) {
      position: absolute;
      top: 0;
      right: 0;
      width: 3px;
      height: 100%;
      background: linear-gradient(to bottom, transparent, var(--primary-color));
      animation: animate2 2s linear infinite;
      animation-delay: 1s;
    }

    &:nth-of-type(3) {
      position: absolute;
      bottom: 0;
      right: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(to left, transparent, var(--primary-color));
      animation: animate3 2s linear infinite;
    }

    &:nth-of-type(4) {
      position: absolute;
      top: 0;
      left: 0;
      width: 3px;
      height: 100%;
      background: linear-gradient(to top, transparent, var(--primary-color));
      animation: animate4 2s linear infinite;
      animation-delay: 1s;
    }

    @keyframes animate1 {
      0% {
        transform: translateX(-100%);
      }

      100% {
        transform: translateX(100%);
      }
    }

    @keyframes animate2 {
      0% {
        transform: translateY(-100%);
      }

      100% {
        transform: translateY(100%);
      }
    }

    @keyframes animate3 {
      0% {
        transform: translateX(100%);
      }

      100% {
        transform: translateX(-100%);
      }
    }

    @keyframes animate4 {
      0% {
        transform: translateY(100%);
      }

      100% {
        transform: translateY(-100%);
      }
    }
  }
`;
