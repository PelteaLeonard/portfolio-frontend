import { styled } from "@mui/material/styles";

export const Section = styled("section")({
  display: "flex",
  color: "#fff",
  justifyContent: "space-between",
});

export const MainContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "20px",
  width: "100%"
});

export const TitleWrapper = styled("div")({
  display: "flex",
});

export const Title = styled("h1")(({theme}) =>({
  fontSize: "24px",
  borderBottom: "2px solid #ff4c29",
  padding: "5px 0",
  [theme.breakpoints.down("lg")]: {
    fontSize: "22px",
  },
}));

export const InnerContainer = styled("div")(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    gap: "20px"
  },
}));
