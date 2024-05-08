import { FaDiscord, FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import {
  AnchorLink,
  RouterLinksContainer,
  CopyrightContainer,
  CopyrightIcon,
  InnerContainer,
  AnchorLinksContainer,
  MainContainer,
  RouterLink,
  SocialContainer,
  Text,
} from "./styles";

function Footer() {
  return (
    <MainContainer>
      <InnerContainer>
        <AnchorLinksContainer>
          <AnchorLink href="#about">About me</AnchorLink>
          <AnchorLink href="#experience">Experience</AnchorLink>
          <AnchorLink href="#projects">Project</AnchorLink>
          <AnchorLink href="#resume">Resume</AnchorLink>
          <AnchorLink href="#contact">Contact me</AnchorLink>
        </AnchorLinksContainer>
        <SocialContainer>
          <RouterLinksContainer>
            <RouterLink to="https://www.facebook.com/leo.leonards.7">
              <FaFacebook/> 
            </RouterLink>
            <RouterLink to="https://www.instagram.com/iam.leo96/">
              <FaInstagram />
            </RouterLink>
            <RouterLink to="https://www.linkedin.com/in/leonard-peltea-67bb76213/">
              <FaLinkedin />
            </RouterLink>
            <RouterLink to="https://github.com/PelteaLeonard">
              <FaGithub />
            </RouterLink>
            <RouterLink to="Leonard Peltea#2669">
              <FaDiscord />
            </RouterLink>
          </RouterLinksContainer>
        </SocialContainer>
        <CopyrightContainer>
          <CopyrightIcon />
          <Text>All Rights Reserved </Text>
        </CopyrightContainer>
      </InnerContainer>
    </MainContainer>
  );
}
export default Footer;
