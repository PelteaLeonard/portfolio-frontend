import Card from "./card";
import Form from "./form";
import { Title, Section, TitleWrapper, MainContainer, InnerContainer } from "./styles";

function Contact() {
  return (
    <Section id="contact">
      <MainContainer>
        <TitleWrapper>
          <Title>04.Contact me</Title>
        </TitleWrapper>
        <InnerContainer>
          <Card />
          <Form />
        </InnerContainer>
      </MainContainer>
    </Section>
  );
}
export default Contact;
