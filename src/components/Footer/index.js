import React from "react";
import {
  FooterContainer,
  SocialIcons,
  Copyright,
  LinkedinIcon,
  GithubIcon,
  WhatsappIcon,
  Text1,
  DivFooter,
  WebsiteIcon,
} from "./Footer";

const Footer = () => {
  return (
    <FooterContainer id="footer">
      <DivFooter>
        <SocialIcons>
          <Text1>
            Siga-nos nas redes sociais para ficar por dentro das nossas últimas
            criações e atualizações. Você pode nos encontrar no LinkedIn e
            GitHub para acompanhar nosso trabalho e interagir conosco. E, é
            claro, você pode entrar em contato conosco a qualquer momento pelo
            WhatsApp para discutir suas necessidades e obter sua cotação
            personalizada.
          </Text1>

          <a
            href="https://www.linkedin.com/in/edtech1985/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/edtech1985/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon />
          </a>
          <a
            href="https://api.whatsapp.com/send?phone=5551992002595"
            target="_blank"
            rel="noopener noreferrer"
          >
            <WhatsappIcon />
          </a>
          <a
            href="https://www.edtech1985.com.br/projetos/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Portfolio edtech1985"
            alt="Portfolio edtech1985"
          >
            <WebsiteIcon />
          </a>
        </SocialIcons>

        <Copyright>
          &copy; {new Date().getFullYear()} Todos os direitos reservados |
          <a
            href="https://edtech1985.com.br/projetos/"
            target="_blank"
            rel="noreferrer"
            aria-label="Portfolio edtech1985"
            alt="Portfolio edtech1985"
          >
            <strong>
              {" "}
              Desenvolvido por<span> edtech1985</span>{" "}
            </strong>
          </a>
        </Copyright>
      </DivFooter>
    </FooterContainer>
  );
};

export default Footer;
