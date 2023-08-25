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
} from "./Section5";
import ImgStudents from "../../assets/2-students.jpg";
import ContactButton from "../ContactButton";
import { SnakeCard } from "../SnakeCard/SnakeAnimation";

const Section5 = () => {
  return (
    <SectionContainer id="primeira-aula">
      <DivTextImg>
        <DivLeft>
          <TitleH3>Inicie sua primeira aula.</TitleH3>

          <Text1>
            Tudo pronto! Agora, resta apenas embarcar na sua primeira aula e dar
            início a uma verdadeira jornada de aprendizado do inglês na escola
            que adota a abordagem correta! As sessões ocorrem quatro vezes por
            semana, cada uma com duração de 30 minutos. A melhor parte? Você é
            quem determina os dias e horários que melhor se encaixam na sua
            rotina. Incrível, não é mesmo?
          </Text1>
        </DivLeft>

        <SnakeCard>
          <span></span>
          <span></span>
          <span></span>
          <span></span>

          <DivRight>
            <Image src={ImgStudents} alt="Estudantes" aria-label="Estudantes" />
          </DivRight>
        </SnakeCard>
      </DivTextImg>
      <Subtitle>
        Todas nossas aulas são 100% online, através de seu smartphone, tablet ou
        computador, e a duração do curso vai depender do seu progresso.
      </Subtitle>
      <ContactButton
        text="Falar com um Consultor"
        link="https://wa.me/5551992002595?text=Ol%C3%A1%2C%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20curso
      "
      />
    </SectionContainer>
  );
};

export default Section5;
