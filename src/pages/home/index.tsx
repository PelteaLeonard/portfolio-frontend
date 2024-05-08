import About from "./about";
import Contact from "./contact";
import Experience from "./experience";
import Projects from "./projects";
import Socials from "./socials";
import { InnerContainer, MainContainer } from "./styles";

function Home() {
  return (
    <MainContainer>
      <InnerContainer>
        <About />
        <Experience/>
        <Projects/>
        <Contact/>
        <Socials/>
      </InnerContainer>
    </MainContainer>
  );
}
export default Home;
