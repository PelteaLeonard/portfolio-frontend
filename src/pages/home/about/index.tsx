import profileImage from "./../../../assets/images/eu1.jpeg";
import {
  Name,
  Title,
  Image,
  Section,
  Paragraph,
  ImageWrapper,
  DetailsContainer,
  ResumeButton,
  TitleWrapper,
  DescriptionContainer,
} from "./styled";

function About() {
  return (
    <Section id="about">
      <DetailsContainer>
        <TitleWrapper>
          <Title>01.About me</Title>
        </TitleWrapper>
        <DescriptionContainer>
          <Paragraph>Hello, my name is</Paragraph>
          <Name>Leonard Peltea</Name>
          <Paragraph>
            Dynamic and results-driven professional with strong foundation in
            web development technologies, including HTML, CSS, JavaScript,
            React, Node.js and Prisma.
          </Paragraph>
          <Paragraph>
            Proficient in creating responsive and user-friendly web interfaces
            by translating design mockups into interactive and functional
            websites.
          </Paragraph>
          <Paragraph>
            Eager to contribute to dynamic projects, leveraging creativity and
            technical skills to enhance user engagement and contribute
            positively to team objectives
          </Paragraph>
        </DescriptionContainer>
        <ResumeButton>Resume</ResumeButton>
      </DetailsContainer>
      <ImageWrapper>
        <Image src={profileImage} alt="profile image"></Image>
      </ImageWrapper>
    </Section>
  );
}
export default About;
