import {
  Container,
  DiscordLink,
  FacebookIcon,
  GithubIcon,
  InstagramIcon,
  Link,
  LinkedinIcon,
} from "./styles";

function Socials() {
  return (
    <Container>
      <Link to="https://www.facebook.com/leo.leonards.7">
        <FacebookIcon />
      </Link>
      <Link to="https://www.instagram.com/iam.leo96/">
        <InstagramIcon />
      </Link>
      <Link to="https://www.linkedin.com/in/leonard-peltea-67bb76213/">
        <LinkedinIcon />
      </Link>
      <Link to="https://github.com/PelteaLeonard">
        <GithubIcon />
      </Link>
      <Link to="Leonard Peltea#2669">
        <DiscordLink />
      </Link>
    </Container>
  );
}
export default Socials;
