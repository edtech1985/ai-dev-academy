import React, { useEffect } from "react";
import {
  SectionContainer,
  Title,
  BackgroundImg,
  Text1,
  DivText,
  DivTextRight,
  DivTextLeft,
} from "./Banner";

import { useTypewriter, Cursor } from "react-simple-typewriter";

import AOS from "aos";
import "aos/dist/aos.css";

const Banner = () => {
  useEffect(() => {
    AOS.init({ duration: 3000 });
  }, []);

  const [typeEffect] = useTypewriter({
    words: [
      "Bem-vindo à AI Dev Academy - O Futuro da Educação!",
      "Chegou a nova geração de ensino com IA",
      "Ensino 100% personalizado",
      "Inteligência Artificial Algoritimica Ultra-Quântica",
      "Aulas EAD e presenciais no Multiverso",
    ],
    loop: true,
    typeSpeed: 50,
    deleteSpeed: 30,
  });

  return (
    <SectionContainer id="home">
      <BackgroundImg>
        <Title>
          {typeEffect}
          <Cursor />
        </Title>

        <DivText>
          <DivTextLeft />
          <DivTextRight>
            <div className="animation" data-aos="zoom-in">
              <Text1>
                Bem-vindo à AI Dev Academy, onde o futuro da educação encontra a
                inovação da inteligência artificial! Somos uma academia pioneira
                que está transformando a maneira como você aprende e domina a
                tecnologia do amanhã.
              </Text1>
              <br />
              <Text1>
                Nossa abordagem revolucionária combina o poder da IA com a busca
                incansável pelo conhecimento, permitindo que você personalize
                sua jornada de aprendizado. Com nossos professores virtuais
                personalizáveis, incluindo modelos de renome como Morgan
                Freeman, Bill Gates e Elon Musk, você tem o controle total sobre
                como e o que aprender.
              </Text1>
              <br />
              <Text1>
                Prepare-se para explorar um mundo de possibilidades e moldar seu
                próprio caminho na IA e no desenvolvimento. O futuro começa
                aqui, na AI Dev Academy!
              </Text1>
            </div>
          </DivTextRight>
        </DivText>
      </BackgroundImg>
    </SectionContainer>
  );
};

export default Banner;
