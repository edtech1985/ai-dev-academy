import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faGithub,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export const FooterContainer = styled.footer`
  background-color: var(--background2);
  color: var(--text1);
  text-align: center;
  padding: 1rem 0;
`;

export const DivFooter = styled.div`
  padding: 1rem;
  margin: 0 2rem;
`;

export const Text1 = styled.p`
  font-size: 0.8rem;
  padding-bottom: 1rem;

  @media (max-width: 480px) {
    padding-bottom: 1rem;
  }
  @media (min-width: 1201px) {
    font-size: 1.25rem;
  }
`;

export const SocialIcons = styled.div`
  margin-bottom: 1rem;

  a {
    color: #fff;
    font-size: 1.5rem;
    margin: 0 10px;
    text-decoration: none;

    &:hover {
      color: var(--third-color);
    }
  }
`;

export const Icon = styled(FontAwesomeIcon)``;

export const LinkedinIcon = styled(Icon).attrs({
  icon: faLinkedin,
})``;

export const GithubIcon = styled(Icon).attrs({
  icon: faGithub,
})``;

export const WhatsappIcon = styled(Icon).attrs({
  icon: faWhatsapp,
})``;

export const WebsiteIcon = styled(Icon).attrs({
  icon: faGlobe,
})``;

export const Copyright = styled.p`
  font-size: 0.75rem;

  a {
    color: #fff;
    text-decoration: none;

    &:hover {
      color: var(--third-color);
    }
  }
`;
