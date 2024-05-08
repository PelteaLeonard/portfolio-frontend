import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaDiscord,
} from "react-icons/fa";

export const Container = styled("div")(({theme}) => ({
  position: "fixed",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  justifyContent: "center",
  top: "50%",
  right: "20px",
  transform: "translateY(-50%)",
  "& a": {
    color: "#fff",
    height: "24px",
    ":hover": {
      color: "#ff4c29",
      transform: "scale(1.2)",
    },
  },
  "& svg": {
    fontSize: "24px",
  },
  "::before": {
    content: "''",
    position: "absolute",
    top: "50%",
    right: "-20px",
    transform: "translateY(-50%)",
    borderTop: "2px solid #ff4c29",
    borderBottom: "2px solid #ff4c29",
    height: "130%",
    width: "35px",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
    pointerEvents:"none",
  },
  [theme.breakpoints.down("lg")]: {
    display: "none",
  },
}));

export const Link = styled(RouterLink)({});

export const FacebookIcon = styled(FaFacebook)({});

export const InstagramIcon = styled(FaInstagram)({});

export const LinkedinIcon = styled(FaLinkedin)({});

export const GithubIcon = styled(FaGithub)({});

export const DiscordLink = styled(FaDiscord)({});
