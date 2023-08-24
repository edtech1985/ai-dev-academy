import React from "react";
import {
  SectionContainer,
  Image,
  DivTextImg,
  DivTextLeft,
  DivImgRight,
  Text1,
  TitleH3,
  Subtitle,
} from "./Section6";
import pastaImage from "../../assets/globo1.jpg";
import ContactButton from "../ContactButton";

const Section6 = () => {
  return (
    <SectionContainer id="section6">
      <Subtitle>
        Entenda como funcionam nossos 4 pilares para um resultado rápido e
        eficaz
      </Subtitle>
      <DivTextImg>
        <DivTextLeft>
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
        </DivTextLeft>

        <DivImgRight>
          <Image src={pastaImage} alt="Imagem de Pasta" />
        </DivImgRight>
      </DivTextImg>

      <ContactButton></ContactButton>
    </SectionContainer>
  );
};

export default Section6;
