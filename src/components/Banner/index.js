import React from "react";
import {
  SectionContainer,
  Title,
  BackgroundImg,
  BannerImg,
  Text1,
} from "./Banner";
import banner from "../../assets/banner1.jpg";
import ContactButton from "../../components/ContactButton";

const Banner = () => {
  return (
    <SectionContainer id="section1">
      <Title>
        Bem-vindo à<strong> AI Dev Academy </strong> - O Futuro da Educação!
      </Title>
      <BackgroundImg>
        <BannerImg
          src={banner}
          alt="Banner AI Dev Academy"
          aria-label="Banner AI Dev Academy"
        />
      </BackgroundImg>

      <Text1>
        Bem-vindo à AI Dev Academy, onde o futuro da educação encontra a
        inovação da inteligência artificial! Somos uma academia pioneira que
        está transformando a maneira como você aprende e domina a tecnologia do
        amanhã. Nossa abordagem revolucionária combina o poder da IA com a busca
        incansável pelo conhecimento, permitindo que você personalize sua
        jornada de aprendizado. Com nossos professores virtuais personalizáveis,
        incluindo modelos de renome como Morgan Freeman, Bill Gates e Elon Musk,
        você tem o controle total sobre como e o que aprender. Prepare-se para
        explorar um mundo de possibilidades e moldar seu próprio caminho na IA e
        no desenvolvimento. O futuro começa aqui, na AI Dev Academy!
      </Text1>
      <ContactButton />
    </SectionContainer>
  );
};

export default Banner;
