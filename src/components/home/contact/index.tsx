import ContactCard from "./card";
import ContactForm from "./form";
import {
  Title,
  Section,
  TitleWrapper,
  MainContainer,
  InnerContainer,
} from "./styles";

function Contact() {
  return (
    <Section id="contact">
      <MainContainer>
        <TitleWrapper>
          <Title>04.Contact me</Title>
        </TitleWrapper>
        <InnerContainer>
          <ContactCard />
          <ContactForm />
        </InnerContainer>
      </MainContainer>
    </Section>
  );
}
export default Contact;
