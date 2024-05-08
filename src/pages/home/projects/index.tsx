import {
  BiLogoCss3,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoRedux,
} from "react-icons/bi";
import Card from "./card";
import calculatorImage from "./../../../assets/images/calculator.png";
import organizerImage from "./../../../assets/images/organizer.png";
import quizImage from "./../../../assets/images/guess-the-capital.png";
import portfolioImage from "./../../../assets/images/portfolio.png";
import project3Image from "./../../../assets/images/project 3.png";
import onlineImage from "./../../../assets/images/online-store.png";
import { CardsContainer, Section, Title, TitleWrapper } from "./styles";
//import { TbBrandTypescript } from "react-icons/tb";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { SiPrisma } from "react-icons/si";

function Projects() {
  return (
    <Section id="projects">
      <TitleWrapper>
        <Title>03.Projects</Title>
      </TitleWrapper>
      <CardsContainer>
        <Card
          projectImage={organizerImage}
          projectName="Organizer"
          gitHubUrl="https://github.com/PelteaLeonard/Quiz-Game"
          liveSite="https://organizer.com"
          icons={[
            { title: "Javascript", icon: <BiLogoJavascript /> },
            {
              title: "React",
              icon: <FaReact />,
            },
            {
              title: "Redux",
              icon: <BiLogoRedux />,
            },
            {
              title: "NodeJS",
              icon: <FaNodeJs />,
            },
            {
              title: "Prisma",
              icon: <SiPrisma />,
            },
            {
              title: "MySQL",
              icon: <GrMysql />,
            },
          ]}
        />
        <Card
          projectImage={quizImage}
          projectName="Quiz Game"
          gitHubUrl="https://github.com/PelteaLeonard/Quiz-Game"
          liveSite="https://peltealeonard.github.io/Quiz-Game-master/"
          icons={[
            { title: "Javascript", icon: <BiLogoJavascript /> },
            {
              title: "CSS",
              icon: <BiLogoCss3 />,
            },
            {
              title: "HTML5",
              icon: <BiLogoHtml5 />,
            },
          ]}
        />
        <Card
          projectImage={portfolioImage}
          projectName="Portfolio"
          gitHubUrl="https://github.com/PelteaLeonard/Portfolio"
          liveSite="https://peltealeonard.github.io/Portfolio/"
          icons={[
            { title: "Javascript", icon: <BiLogoJavascript /> },
            {
              title: "CSS",
              icon: <BiLogoCss3 />,
            },
            {
              title: "HTML5",
              icon: <BiLogoHtml5 />,
            },
          ]}
        />
        <Card
          projectImage={project3Image}
          projectName="Project 3"
          gitHubUrl="https://github.com/PelteaLeonard/Project3"
          liveSite="https://peltealeonard.github.io/Project3/"
          icons={[
            { title: "Javascript", icon: <BiLogoJavascript /> },
            {
              title: "CSS",
              icon: <BiLogoCss3 />,
            },
            {
              title: "HTML5",
              icon: <BiLogoHtml5 />,
            },
          ]}
        />
        <Card
          projectImage={onlineImage}
          projectName="Online store"
          gitHubUrl="https://github.com/PelteaLeonard/online-store"
          liveSite="https://peltealeonard.github.io/online-store/"
          icons={[
            { title: "Javascript", icon: <BiLogoJavascript /> },
            {
              title: "React",
              icon: <FaReact />,
            },
            {
              title: "Redux",
              icon: <BiLogoRedux />,
            },
            {
              title: "NodeJS",
              icon: <FaNodeJs />,
            },
            {
              title: "Prisma",
              icon: <SiPrisma />,
            },
            {
              title: "MySQL",
              icon: <GrMysql />,
            },
          ]}
        />

        <Card
          projectName="Calculator"
          projectImage={calculatorImage}
          gitHubUrl="https://github.com/PelteaLeonard/online-store"
          liveSite="https://peltealeonard.github.io/online-store/"
          icons={[
            // {
            //   title: "Typescript",
            //   icon: <TbBrandTypescript />,
            // },
            { title: "Javascript", icon: <BiLogoJavascript /> },
            {
              title: "React",
              icon: <FaReact />,
            },
          ]}
        />
      </CardsContainer>
    </Section>
  );
}
export default Projects;
