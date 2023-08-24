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
} from "./Section5";
import pastaImage from "../../assets/globo1.jpg";
import ContactButton from "../ContactButton";

const Section5 = () => {
  return (
    <SectionContainer id="section5">
      <DivTextImg>
        <DivTextLeft>
          <TitleH3>Inicie sua primeira aula.</TitleH3>

          <Text1>
            Tudo pronto! Agora, resta apenas embarcar na sua primeira aula e dar
            início a uma verdadeira jornada de aprendizado do inglês na escola
            que adota a abordagem correta! As sessões ocorrem quatro vezes por
            semana, cada uma com duração de 30 minutos. A melhor parte? Você é
            quem determina os dias e horários que melhor se encaixam na sua
            rotina. Incrível, não é mesmo?
          </Text1>
        </DivTextLeft>

        <DivImgRight>
          <Image src={pastaImage} alt="Imagem de Pasta" />
        </DivImgRight>
      </DivTextImg>
      <Subtitle>
        Todas nossas aulas são 100% online, através de seu smartphone, tablet ou
        computador, e a duração do curso vai depender do seu progresso.
      </Subtitle>
      <ContactButton></ContactButton>
    </SectionContainer>
  );
};

export default Section5;
