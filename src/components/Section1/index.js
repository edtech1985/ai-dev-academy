import React from "react";
import {
  SectionContainer,
  Image,
  DivTextImg,
  DivLeft,
  DivRight,
  Text1,
  Subtitle,
} from "./Section1";
import ImgCyborgAI from "../../assets/ciborgAI.jpg";
import { SnakeCard } from "../SnakeCard/SnakeAnimation";

function Section1() {
  return (
    <SectionContainer id="about">
      <Subtitle>Sobre a AI Dev Academy</Subtitle>

      <DivTextImg>
        <DivLeft>
          <Text1>
            Na AI Dev Academy, estamos na vanguarda da revolução educacional.
            Estamos redefinindo a maneira como a inteligência artificial e a
            educação interagem, permitindo a você mergulhar em um mundo de
            conhecimento sob medida. Nossos professores virtuais personalizáveis
            são o coração dessa revolução. Imagine ter um mentor virtual que se
            adapta a você - suas preferências, ritmo e estilo de aprendizado.
            Com a combinação perfeita de tecnologia de ponta e expertise em IA,
            nossos professores guiarão você em uma jornada de aprendizado única
            e personalizada. Não se trata apenas de aulas, mas de uma
            experiência educacional moldada por você e aprimorada pela
            inteligência artificial.
          </Text1>
        </DivLeft>
        <SnakeCard>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <DivRight>
            <Image src={ImgCyborgAI} alt="Imagem de Pasta" />
          </DivRight>
        </SnakeCard>
      </DivTextImg>
    </SectionContainer>
  );
}

export default Section1;
