import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import { BiLogoGithub } from "react-icons/bi";
import { PiShareFat } from "react-icons/pi";

export const MainContainer = styled("div")({
  display: "flex",
  height: "250px",
  position: "relative",
  ":hover": {
    "& img": {
      opacity: ".5",
    },
    "& div": {
      opacity: "1",
      visibility: "visible",
    },
  },
});

export const Image = styled("img")({
  width: "100%",
  height: "100%",
  transition: "opacity .5s",
});

export const LinksContainer = styled("div")({
  display: "flex",
  position: "absolute",
  top: "50%",
  left: "50%",
  gap: "10px",
  transform: "translate(-50%, -50%)",
  visibility: "hidden",
  transition: "visibility .5s linear, opacity .5s linear",
  opacity: "0",
  fontSize: "30px",
});

export const DetailsContainer = styled("div")({
  position: "absolute",
  left: "0",
  bottom: "0",
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  color: "#fff",
  padding: "10px",
  visibility: "hidden",
  transition: "visibility .5s linear, opacity .5s linear",
  opacity: "0",
});

export const Link = styled(RouterLink)({
  color: "#fff",
  textDecoration: "none",
  textTransform: "uppercase",
  fontWeight: "900",
  ":hover": {
    color: "#ff4c29",
  },
});

export const TitleContainer = styled("div")({});

export const IconsContainer = styled("div")({
  display: "flex",
  gap: "4px",
  fontSize: "18px",
});

export const ShareIcon = styled(PiShareFat)({});

export const GithubIcon = styled(BiLogoGithub)({});

export const IconWrapper = styled("div")({
  "& svg:hover": {
    cursor: "pointer",
    color: "#ff4c29",
    transform: "scale(1.2)",
  },
});
