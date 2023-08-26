import React from "react";
import styled from "styled-components";
import pilaresData from "./pilares.json";

const PilaresContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 769px) and (max-width: 991px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 992px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const PilarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  border: 2px solid var(--text1);
  box-shadow: ;
  padding: 1rem;
`;

const PilarContent = styled.div`
  flex: 1;

  h3 {
    margin: 0;
    font-size: 1.25rem;
    padding: 1rem;
    color: var(--text1);
  }

  p {
    padding: 1rem;
    font-size: 1rem;
    color: var(--text1);

    @media (max-width: 480px) {
      padding-bottom: 1rem;
    }
    @media (min-width: 481px) and (max-width: 768px) {
    }
    @media (min-width: 769px) and (max-width: 1024px) {
    }
    @media (min-width: 1025px) and (max-width: 1200px) {
    }

    @media (min-width: 1201px) {
      font-size: 1.25rem;
    }
  }
`;

const Icon = styled.i`
  font-size: 48px;
  color: var(--text1);
  padding: 1rem;
`;

const Pilares = () => {
  return (
    <PilaresContainer>
      {pilaresData.map((pilar, index) => (
        <PilarCard key={index}>
          <Icon className={pilar.icone} aria-hidden="true" />
          <PilarContent>
            <h3>{pilar.titulo}</h3>
            <p>{pilar.descricao}</p>
          </PilarContent>
        </PilarCard>
      ))}
    </PilaresContainer>
  );
};

export default Pilares;
