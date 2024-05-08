import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  Nav,
  Link,
  Title,
  Header,
  LinkPrefix,
  LinkWrapper,
  LogoWrapper,
  MenuIconButton,
  MobileLinksContainer,
  DesktopLinksContainer,
} from "./styles";

function Navbar() {
  const [mobileLinksVisible, setMobileLinksVisible] = useState<boolean>(false);

  return (
    <Header>
      <Nav>
        <LogoWrapper>
          <Title>Portfolio</Title>
        </LogoWrapper>
        <MenuIconButton
          onClick={() => setMobileLinksVisible((current) => !current)}
        >
          <GiHamburgerMenu />
        </MenuIconButton>
        <DesktopLinksContainer>
          <LinkWrapper>
            <LinkPrefix>01.</LinkPrefix>
            <Link href="#about">About me</Link>
          </LinkWrapper>
          <LinkWrapper>
            <LinkPrefix>02.</LinkPrefix>
            <Link href="#experience">Experience</Link>
          </LinkWrapper>
          <LinkWrapper>
            <LinkPrefix>03.</LinkPrefix>
            <Link href="#projects">Projects</Link>
          </LinkWrapper>
          <LinkWrapper>
            <LinkPrefix>04.</LinkPrefix>
            <Link href="#contact">Contact me</Link>
          </LinkWrapper>
          <LinkWrapper>
            <LinkPrefix>05.</LinkPrefix>
            <Link href={"/files/cv.docx"} download={"Leonard Peltea CV.docx"}>
              Resume
            </Link>
          </LinkWrapper>
        </DesktopLinksContainer>
        {mobileLinksVisible && (
          <MobileLinksContainer>
            <LinkWrapper>
              <LinkPrefix>01.</LinkPrefix>
              <Link href="#about" onClick={() => setMobileLinksVisible(false)}>
                About me
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <LinkPrefix>02.</LinkPrefix>
              <Link
                href="#experience"
                onClick={() => setMobileLinksVisible(false)}
              >
                Experience
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <LinkPrefix>03.</LinkPrefix>
              <Link
                href="#projects"
                onClick={() => setMobileLinksVisible(false)}
              >
                Projects
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <LinkPrefix>04.</LinkPrefix>
              <Link
                href="#contact"
                onClick={() => setMobileLinksVisible(false)}
              >
                Contact me
              </Link>
            </LinkWrapper>
            <LinkWrapper>
              <LinkPrefix>05.</LinkPrefix>
              <Link
                href={"/files/cv.docx"}
                download={"Leonard Peltea CV.docx"}
                onClick={() => setMobileLinksVisible(false)}
              >
                Resume
              </Link>
            </LinkWrapper>
          </MobileLinksContainer>
        )}
      </Nav>
    </Header>
  );
}
export default Navbar;
