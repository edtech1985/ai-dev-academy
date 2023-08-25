import React from "react";
import {
  SectionContainer,
  Image,
  DivTextImg,
  DivLeft,
  DivRight,
  Text1,
  TitleH3,
  Subtitle,
} from "./Section6";
import ImgGlobe from "../../assets/face-ai.jpg";
import ContactButton from "../ContactButton";
import { SnakeCard } from "../SnakeCard/SnakeAnimation";

const Section6 = () => {
  return (
    <SectionContainer id="pilares">
      <Subtitle>
        Entenda como funcionam nossos 4 pilares para um resultado rápido e
        eficaz
      </Subtitle>
      <DivTextImg>
        <DivLeft>
          <TitleH3>Liberdade</TitleH3>
          <Text1>
            Chega de perder tempo e dinheiro. Aqui você aprende em qualquer
            lugar, pelo smartphone, computador ou tablet.
          </Text1>
          <TitleH3>Flexibilidade</TitleH3>
          <Text1>
            No seu tempo! Aulas com horários flexíveis, para que você possa
            fazer ajustes de acordo com a sua disponibilidade.
          </Text1>
          <TitleH3>Prática</TitleH3>
          <Text1>
            4 aulas semanais, em que você aprende conteúdo novo, exercita e tira
            dúvidas.
          </Text1>
          <TitleH3>Proximidade</TitleH3>
          <Text1>
            Aprenda com o mesmo professor particular. Só assim você garante um
            aprendizado com mais empatia e personalização.
          </Text1>
        </DivLeft>

        <SnakeCard>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          <DivRight>
            <Image src={ImgGlobe} alt="Imagem de Pasta" />
          </DivRight>
        </SnakeCard>
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
