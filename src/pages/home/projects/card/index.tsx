import { Tooltip } from "@mui/material";
import { ReactElement } from "react";
import {
  Link,
  Image,
  TitleContainer,
  LinksContainer,
  IconsContainer,
  DetailsContainer,
  GithubIcon,
  ShareIcon,
  MainContainer,
  IconWrapper,
} from "./styles";

interface IIcon {
  title: string;
  icon: ReactElement;
}

interface ICardProps {
  projectName: string;
  gitHubUrl: string;
  liveSite: string;
  projectImage: string;
  icons: IIcon[];
}

function Card(props: ICardProps) {
  const { projectName, gitHubUrl, liveSite, icons, projectImage } = props;

  return (
    <MainContainer>
      <Image src={projectImage} alt="quiz" />
      <LinksContainer>
        <Tooltip title="Link to github repo">
          <Link to={gitHubUrl}>
            <GithubIcon />
          </Link>
        </Tooltip>
        <Tooltip title="Link to live site">
          <Link to={liveSite}>
            <ShareIcon />
          </Link>
        </Tooltip>
      </LinksContainer>
      <DetailsContainer>
        <TitleContainer>{projectName}</TitleContainer>
        <IconsContainer>
          {icons.map(({ icon, title }, index) => (
            <Tooltip key={index} title={title}>
              <IconWrapper>{icon}</IconWrapper>
            </Tooltip>
          ))}
        </IconsContainer>
      </DetailsContainer>
    </MainContainer>
  );
}

export default Card;
