import { styled } from "@mui/material/styles";
import { Link } from "react-router-dom";
import { FaCopyright } from "react-icons/fa";

export const MainContainer = styled("footer")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#15314B",
  color: "#fff",
  height: "100px",
  gap: "10px",
  [theme.breakpoints.down("lg")]: {
    height: "140px",
    gap: "10px",
  },
}));

export const InnerContainer = styled("div")({
  width: "1200px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  padding: "20px 0",
});

export const AnchorLinksContainer = styled("span")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: "20px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
  },
}));

export const AnchorLink = styled("a")({
  color: "#fff",
  textDecoration: "none",
  ":hover": {
    color: "grey",
  },
});

export const SocialContainer = styled("div")(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

export const RouterLinksContainer = styled("div")(({ theme }) => ({
  display: "flex",
  gap: "10px",
  justifyContent: "center",
  "& a": {
    color: "#fff",
    height: "24px",
    display: "flex",
    alignItems: "center",
    ":hover": {
      color: "#ff4c29",
      transform: "scale(1.2)",
    },
  },
  "& svg": {
    fontSize: "24px",
  },
  [theme.breakpoints.down("lg")]: {
    "& svg": {
      fontSize: "18px",
      textAlign: "center",
      alignItems: "center",
    },
  },
}));

export const RouterLink = styled(Link)({});

export const CopyrightContainer = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  color: "#fff",
  justifyContent: "center",
  gap: "5px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "13px",
  },
}));

export const CopyrightIcon = styled(FaCopyright)({});

export const Text = styled("p")({});
