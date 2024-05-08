import { styled } from "@mui/material/styles";

export const MainContainer = styled("div")(({theme}) => ({
  display: "flex",
  height: "490px",
  width: "400px",
  position: "relative",
  "::before": {
    content: "''",
    position: "absolute",
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    background: "rgba(0, 0, 0, 0.4)",
    pointerEvents: "none",
    borderRadius: "10px",
  },
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    justifyContent: "center",
  },
  
}));

export const ImageContainer = styled("div")(({ theme }) => ({
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    display: "flex",
    alignItems: "center",
    width: "100%",
  },
}));

export const Image = styled("img")({
  width: "100%",
  height: "100%",
  borderRadius: "10px",
  
});

export const ContactContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  color: "#fff",
  padding: "20px",
  position: "absolute",
  justifyContent: "space-between",
  height: "100%",
});

export const Paragraph = styled("p")({
  fontSize: "14px",
});

export const DetailsContainer = styled("div")(({theme}) =>({
  display: "flex",
  flexDirection: "column",
  fontSize: "14px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column"
  },
}));

export const ContactNumber = styled("div")({});

export const ContactEmail = styled("p")({});
