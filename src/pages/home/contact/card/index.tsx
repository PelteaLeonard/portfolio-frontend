import contactImage from "./../../../../../src/assets/images/contactImage.webp";
import {
  ContactContainer,
  ContactEmail,
  ContactNumber,
  DetailsContainer,
  Image,
  ImageContainer,
  MainContainer,
  Paragraph,
} from "./styles";

function Card() {
  return (
    <MainContainer>
      <ImageContainer>
        <Image src={contactImage} alt="contact image"></Image>
      </ImageContainer>
      <ContactContainer>
        <Paragraph>
          You've got a dream website you wanna bring to life? Well...come on
          then, let's make it real.
        </Paragraph>
        <DetailsContainer>
          <ContactNumber>Phone: 07592648983</ContactNumber>
          <ContactEmail>Email: leonard.peltea@yahoo.com</ContactEmail>
        </DetailsContainer>
      </ContactContainer>
    </MainContainer>
  );
}

export default Card;
