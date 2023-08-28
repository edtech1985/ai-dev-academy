import React from "react";
import {
  SectionContainer,
  DivTextImg,
  DivLeft,
  Text1,
  Subtitle,
} from "./Section1";
import ContactButton from "../ContactButton";
import YouTubeVideo from "./YouTubeVideo";

function Section1() {
  return (
    <SectionContainer id="about">
      <ContactButton
        link="#cta-form"
        text="Agendar aula gratuita!"
        alt="Agendar Aula gratuita"
        aria-label="Agendar aula gratuita"
      />
      <Subtitle>Sobre a AI Dev Academy</Subtitle>

      <DivTextImg>
        <DivLeft>
          <div className="animation" data-aos="zoom-in">
            <Text1>
              Na AI Dev Academy, estamos na vanguarda da revolução educacional.
              Estamos redefinindo a maneira como a inteligência artificial e a
              educação interagem, permitindo a você mergulhar em um mundo de
              conhecimento sob medida. Nossos professores virtuais
              personalizáveis são o coração dessa revolução. Imagine ter um
              mentor virtual que se adapta a você - suas preferências, ritmo e
              estilo de aprendizado. Com a combinação perfeita de tecnologia de
              ponta e expertise em IA, nossos professores guiarão você em uma
              jornada de aprendizado única e personalizada. Não se trata apenas
              de aulas, mas de uma experiência educacional moldada por você e
              aprimorada pela inteligência artificial.
            </Text1>
          </div>
        </DivLeft>
        <YouTubeVideo />
      </DivTextImg>
    </SectionContainer>
  );
}

export default Section1;
