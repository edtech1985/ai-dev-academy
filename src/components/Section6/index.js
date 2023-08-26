import React from "react";
import { SectionContainer, DivTextImg, Subtitle } from "./Section6";
import ContactButton from "../ContactButton";
import { SnakeCard } from "../SnakeCard/SnakeAnimation";
import Pilares from "./Pilares";

const Section6 = () => {
  return (
    <SectionContainer id="pilares">
      <Subtitle>
        Entenda como funcionam nossos 4 pilares para um resultado rápido e
        eficaz
      </Subtitle>
      <DivTextImg>
        <Pilares />
      </DivTextImg>
      <ContactButton
        link="#cta-form"
        text="Quero começar agora!"
        alt="Começar Agora"
        aria-label="Quero Começar Agora!"
      />
    </SectionContainer>
  );
};

export default Section6;
