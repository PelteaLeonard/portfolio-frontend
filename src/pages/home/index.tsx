import About from "../../components/home/about";
import Socials from "../../components/home/socials";
import Contact from "../../components/home/contact";
import Projects from "../../components/home/projects";
import Experience from "../../components/home/experience";
import { InnerContainer, MainContainer } from "./styles";

function Home() {
  return (
    <MainContainer>
      <InnerContainer>
        <About />
        <Experience />
        <Projects />
        <Contact />
        <Socials />
      </InnerContainer>
    </MainContainer>
  );
}
export default Home;
