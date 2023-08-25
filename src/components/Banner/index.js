import React from "react";
import {
  SectionContainer,
  Title,
  BackgroundImg,
  BannerImg,
  Text1,
  DivText,
  DivBgLeft,
  DivBgRight,
  DivImgRight,
  DivTextRight,
  DivTextLeft,
} from "./Banner";
import ContactButton from "../../components/ContactButton";

import { useTypewriter, Cursor } from "react-simple-typewriter";

const Banner = () => {
  const [typeEffect] = useTypewriter({
    words: ["Bem-vindo à AI Dev Academy - O Futuro da Educação!"],
    loop: true,
    typeSpeed: 100,
    deleteSpeed: 30,
  });

  return (
    <SectionContainer id="home">
      <BackgroundImg>
        <Title>
          AI Dev! {typeEffect} <Cursor />
        </Title>
        {/* <BannerImg
          src={banner}
          alt="Banner AI Dev Academy"
          aria-label="Banner AI Dev Academy"
        /> */}

        <DivText>
          <DivTextLeft />
          <DivTextRight>
            <Text1>
              Bem-vindo à AI Dev Academy, onde o futuro da educação encontra a
              inovação da inteligência artificial! Somos uma academia pioneira
              que está transformando a maneira como você aprende e domina a
              tecnologia do amanhã.
            </Text1>
            <br />
            <Text1>
              Nossa abordagem revolucionária combina o poder da IA com a busca
              incansável pelo conhecimento, permitindo que você personalize sua
              jornada de aprendizado. Com nossos professores virtuais
              personalizáveis, incluindo modelos de renome como Morgan Freeman,
              Bill Gates e Elon Musk, você tem o controle total sobre como e o
              que aprender.
            </Text1>
            <br />
            <Text1>
              Prepare-se para explorar um mundo de possibilidades e moldar seu
              próprio caminho na IA e no desenvolvimento. O futuro começa aqui,
              na AI Dev Academy!
            </Text1>
          </DivTextRight>
        </DivText>

        <ContactButton />
      </BackgroundImg>
    </SectionContainer>
  );
};

export default Banner;
