import { IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Header = styled("header")({
  position: "fixed",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  backgroundColor: "#15314B",
  height: "60px",
  zIndex: "1",
});

export const Nav = styled("nav")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  height: "100%",
  width: "1200px",
  [theme.breakpoints.down("xl")]: {
    padding: "0 30px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "0 12px",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));

export const LogoWrapper = styled("div")(({ theme }) => ({
  color: "#fff",
  [theme.breakpoints.down("md")]: {
    padding: "0 8px",
  },
}));

export const Title = styled("h1")({
  fontSize: "32px",
  fontFamily: "Cedarville Cursive",
});

export const LinksContainer = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "20px",
});

export const LinkWrapper = styled("div")({
  display: "flex",
  justifyContent: "center",
  gap: "2px",
});

export const LinkPrefix = styled("span")({
  color: "#ff4c29",
});

export const Link = styled("a")({
  color: "#fff",
  textDecoration: "none",
  ":hover": {
    color: "grey",
  },
});

export const MenuIconButton = styled(IconButton)(({ theme }) => ({
  display: "none",
  "& svg": {
    color: "#FFF",
  },
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));

export const DesktopLinksContainer = styled(LinksContainer)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const MobileLinksContainer = styled(LinksContainer)({
  position: "absolute",
  width: "100%",
  top: "60px",
  left: "0",
  display: "flex",
  flexDirection: "column",
  backgroundColor: "#15314B",
  padding: "20px 0",
});
