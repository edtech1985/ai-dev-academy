import React from "react";
import {
  SectionContainer,
  Image,
  DivTextImg,
  DivLeft,
  DivRight,
  Text1,
  TitleH3,
  SnakeCard,
} from "./Section7";
import ImgTeacher from "../../assets/teacher.jpg";

const Section7 = () => {
  return (
    <SectionContainer id="section7">
      <DivTextImg>
        <DivRight>
          <SnakeCard>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <Image
              src={ImgTeacher}
              alt="Professor AI"
              aria-label="Professor AI"
            />
          </SnakeCard>
        </DivRight>
        <DivLeft>
          <TitleH3>SECTION 7</TitleH3>
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
        </DivLeft>
      </DivTextImg>
    </SectionContainer>
  );
};

export default Section7;
