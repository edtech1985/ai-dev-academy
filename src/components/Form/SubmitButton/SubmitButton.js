import styled from "styled-components";

export const Container = styled.button`
  display: inline-block;
  position: relative;
  background-color: green;
  color: #fff;
  width: 10rem;
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

export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  margin-left: 40%;
  transform: translateX(-50%);
  height: 1rem;
  div {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #fff;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  div:nth-child(1) {
    left: 8px;
    animation: lds-ellipsis1 0.6s infinite;
  }
  div:nth-child(2) {
    left: 8px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(3) {
    left: 32px;
    animation: lds-ellipsis2 0.6s infinite;
  }
  div:nth-child(4) {
    left: 56px;
    animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }
  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(24px, 0);
    }
  }
  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
`;
