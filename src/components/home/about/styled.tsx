import { styled } from "@mui/material/styles";

export const Section = styled("section")(({ theme }) => ({
  display: "flex",
  color: "#fff",
  justifyContent: "space-between",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column-reverse",
    gap: "30px",
  },
}));

export const DetailsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  width: "600px",
  justifyContent: "center",
  gap: "20px",
  [theme.breakpoints.down("lg")]: {
    width: "auto",
  },
  [theme.breakpoints.down("md")]: {
    marginLeft: "0",
    gap: "10px",
  },
}));

export const TitleWrapper = styled("div")({
  display: "flex",
});

export const Title = styled("h2")(({ theme }) => ({
  fontSize: "24px",
  borderBottom: "2px solid #ff4c29",
  padding: "5px 0",
  [theme.breakpoints.down("lg")]: {
    fontSize: "22px",
  },
}));

export const DescriptionContainer = styled("div")({
  display: "flex",
  flexDirection: "column",
  gap: "5px",
});

export const Paragraph = styled("p")(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "1.8",
  textAlign: "justify",
  [theme.breakpoints.down("lg")]: {
    fontSize: "13px",
    lineHeight: "1.6",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

export const Name = styled("h1")(({ theme }) => ({
  fontSize: "40px",
  [theme.breakpoints.down("lg")]: {
    fontSize: "36px",
  },
}));

export const ResumeButton = styled("button")(({ theme }) => ({
  backgroundColor: "#082032",
  fontSize: "20px",
  borderBottom: "2px solid #ff4c29",
  borderLeft: "2px solid #ff4c29",
  color: "#fff",
  width: "160px",
  height: "50px",
  borderTop: "0",
  borderRight: "0",
  transition: "background-color .3s .3s",
  ":hover": {
    cursor: "pointer",
    backgroundColor: "#ff4c29",
  },
  [theme.breakpoints.down("lg")]: {
    fontSize: "18px",
    width: "150px",
    height: "45px",
  },
}));

export const ImageWrapper = styled("div")(({ theme }) => ({
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    display: "flex",
    alignItems: "center",
  },
}));

export const Image = styled("img")(({ theme }) => ({
  width: "400px",
  height: "100%",
  [theme.breakpoints.down("lg")]: {
    width: "400px",
  },
  [theme.breakpoints.down("md")]: {
    width: "400px",
    margin: "auto",
  },
  [theme.breakpoints.down("sm")]: {
    width: "300px",
  },
}));
