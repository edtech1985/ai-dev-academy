import React, { useEffect } from "react";
import {
  SectionContainer,
  Image,
  DivTextImg,
  DivLeft,
  DivRight,
  Text1,
  TitleH3,
  BreakPointDivUp,
  BreakPointDivDown,
} from "./Section4";
import ImgTeacher from "../../assets/teacher.jpg";
import { SnakeCard } from "../SnakeCard/SnakeAnimation";

const Section4 = () => {
  return (
    <SectionContainer id="section4">
      <DivTextImg>
        <BreakPointDivUp>
          <SnakeCard>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <DivRight>
              <div className="animation" data-aos="fade-right">
                <Image
                  src={ImgTeacher}
                  alt="Professor AI"
                  aria-label="Professor AI"
                />
              </div>
            </DivRight>
          </SnakeCard>
        </BreakPointDivUp>

        <DivLeft>
          <div className="animation" data-aos="fade-left">
            <TitleH3>Escolha o seu professor.</TitleH3>
            <Text1>
              Com a sua inscrição confirmada, é o momento de selecionar o mentor
              que irá orientar você em sua jornada em direção à maestria. Cada
              aula é uma experiência individualizada e o Professor escolhido
              será seu guia dedicado ao longo de todo o percurso educacional.
            </Text1>
            <Text1>
              <br></br>
              Ah, mas caso você não se adapte ao professor, não tem problemas,
              basta solicitar a troca, ok? Sua satisfação é nossa prioridade!
            </Text1>
          </div>
        </DivLeft>
        <BreakPointDivDown>
          <SnakeCard>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            <DivRight>
              <Image
                src={ImgTeacher}
                alt="Professor AI"
                aria-label="Professor AI"
              />
            </DivRight>
          </SnakeCard>
        </BreakPointDivDown>
      </DivTextImg>
    </SectionContainer>
  );
};

export default Section4;
