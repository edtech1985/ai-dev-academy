import React from "react";
import {
  SectionContainer,
  Image,
  DivTextImg,
  DivLeft,
  DivRight,
  Text1,
  TitleH3,
} from "./Section3";
import ImgFingers from "../../assets/ai-fingers.jpeg";

const Section3 = () => {
  return (
    <SectionContainer id="matricula">
      <DivTextImg>
        <DivLeft>
          <TitleH3>Faça sua matrícula.</TitleH3>

          <Text1>
            Após preencher o formulário com seus dados e realizar a aula
            experimental, basta realizar sua matrícula e o pagamento através de
            um cartão de crédito.
          </Text1>
        </DivLeft>

        <DivRight>
          <Image src={ImgFingers} alt="Imagem de Pasta" />
        </DivRight>
      </DivTextImg>
    </SectionContainer>
  );
};

export default Section3;
