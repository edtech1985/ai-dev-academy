import React from "react";
import {
  SectionContainer,
  Image,
  DivTextImg,
  DivTextLeft,
  DivImgRight,
  Text1,
  TitleH3,
} from "./Section4";
import pastaImage from "../../assets/globo2.jpg";
import ContactButton from "../../components/ContactButton";

const Section4 = () => {
  return (
    <SectionContainer id="section4">
      <DivTextImg>
        <DivImgRight>
          <Image src={pastaImage} alt="Imagem de Pasta" />
        </DivImgRight>
        <DivTextLeft>
          <TitleH3>Escolha o seu professor.</TitleH3>
          <Text1>
            Com a sua inscrição confirmada, é o momento de selecionar o mentor
            que irá orientar você em sua jornada em direção à maestria. Cada
            aula é uma experiência individualizada e o Professor escolhido será
            seu guia dedicado ao longo de todo o percurso educacional.
          </Text1>
          <Text1>
            <br></br>
            Ah, mas caso você não se adapte ao professor, não tem problemas,
            basta solicitar a troca, ok? Sua satisfação é nossa prioridade!
          </Text1>
        </DivTextLeft>
      </DivTextImg>
    </SectionContainer>
  );
};

export default Section4;
