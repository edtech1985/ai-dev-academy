import React from "react";
import { SectionContainer, DivTextImg, Subtitle } from "./Section6";
import ContactButton from "../ContactButton";
import Pilares from "./Pilares";
import YouTubeVideo from "./YouTubeVideo";

const Section6 = () => {
  return (
    <SectionContainer id="pilares">
      <YouTubeVideo />

      <Subtitle>
        Entenda como funcionam nossos 4 pilares para um resultado rápido e
        eficaz
      </Subtitle>
      <DivTextImg>
        <div className="animation" data-aos="fade-down">
          <Pilares />
        </div>
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
