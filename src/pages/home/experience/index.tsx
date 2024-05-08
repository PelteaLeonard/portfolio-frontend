import Card from "./card";
import {
  Diamond,
  CardsContainer,
  LeftCardWrapper,
  Section,
  RightCardWrapper,
  Title,
  TitleWrapper,
  VerticalDivider,
} from "./styles";

function Experience() {
  return (
    <Section id="experience">
      <TitleWrapper>
        <Title>02.Experience</Title>
      </TitleWrapper>
      <CardsContainer>
        <VerticalDivider orientation="vertical" />
        <LeftCardWrapper>
          <Diamond />
          <Card
            title="Delivery Driver"
            date={"2020-Present"}
            responsibilities={[
              "Conduct daily pre-trip inspections to ensure safe and efficient delivery operations.",
              "Execute loading and unloading of merchandise at stores and vendor locations, prioritizing safety and minimizing disruptions.",
              "Strategically load vehicles to ensure secure transportation and prevent any potential damage during high-volume deliveries. ",
              "Provide valuable feedback to manager regarding daily deliveries.",
              "Ensure accurate and secure delivery of parcels by meticulously following customer's instructions and carefully selecting designated safe locations.",
              "Accomplished 300+ parcel deliveries daily, making 180 stops, with flawless record of zero concessions and 100% delivery rate",
              "Meticulously selected optimal routes while adhering to delivery instructions and fuel policies, consistently meeting company targets",
            ]}
            arrow="right"
          />
        </LeftCardWrapper>
        <RightCardWrapper>
          <Diamond />
          <Card
            title="Plastic Products Assembly Operator"
            date={"2016-2020"}
            responsibilities={[
              "Utilized various equipment to assemble products and components, proactively adjusting settings to ensure precise work.",
              "Operated hydraulic machines to securely bind materials and create durable joints. ",
              "Conducted thorough quality checks on final products to ensure compliance with specifications and assigned appropriate quality grades. ",
              "Provided instruction on machinery usage, standard operating procedures, and company policies. ",
              "Enhanced aesthetics and strength of metal components through application of specific treatments.",
              "Refined product appearance through application of finishes and carefully packed items into boxes and containers for shipping.",
              "Trained and mentored team of five new employees, fostering supportive and high-performing work environment.",
            ]}
            arrow="left"
          />
        </RightCardWrapper>
        <LeftCardWrapper>
          <Diamond />
          <Card
            title="Web Developer Mentor"
            date={"2022-Present"}
            responsibilities={[
              "Frontend Mentor provides designs so that you can practice your front-end skills using a real-life work. The challenges include designs (both mobile and desktop), assets, and a style guide to get you started.",
              "Worked on different projects that allowed me to learn a lot about different topics such as form validation, DOM Manipulation, creating visually appealing designs, making API calls, switching off your entire work and trying different frameworks for styling such as React instead of vanilla Javascript.",
              "I also enjoyed challenging myself to do these projects in a fixed amount of time. Got comfortable with versioning systems such as Git",
              "Keeping track of testing progress and reporting results to relevant stakeholders.",
              "Participating in product release and acceptance testing.",
              "Staying up to date with the latest testing techniques and technologies",
              "Accomplishments:",
              "I gained great teamwork skills",
              "I became a very detail oriented person",
            ]}
            arrow="right"
          />
        </LeftCardWrapper>
      </CardsContainer>
    </Section>
  );
}
export default Experience;
