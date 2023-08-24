import React from "react";
import {
  SectionContainer,
  Image,
  DivTextImg,
  DivTextLeft,
  DivImgRight,
  Text1,
  TitleH3,
} from "./Section3";
import pastaImage from "../../assets/landingpage.jpg";

const Section3 = () => {
  return (
    <SectionContainer id="section3">
      <DivTextImg>
        <DivTextLeft>
          <TitleH3>Faça sua matrícula.</TitleH3>

          <Text1>
            Após preencher o formulário com seus dados e realizar a aula
            experimental, basta realizar sua matrícula e o pagamento através de
            um cartão de crédito.
          </Text1>
        </DivTextLeft>

        <DivImgRight>
          <Image src={pastaImage} alt="Imagem de Pasta" />
        </DivImgRight>
      </DivTextImg>
    </SectionContainer>
  );
};

export default Section3;
