import { styled } from "@mui/material/styles";

export const Section = styled("section")({
  display: "flex",
  flexDirection: "column",
  gap: "20px",
});

export const TitleWrapper = styled("div")({
  display: "flex",
  color: "#fff",
});

export const Title = styled("h1")(({theme}) =>({
  fontSize: "24px",
  borderBottom: "2px solid #ff4c29",
  padding: "5px 0",
  [theme.breakpoints.down("lg")]: {
    fontSize: "22px",
  },
}));

export const CardsContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gridTemplateRows: "1fr 1fr 1fr",
  gap: "10px",
  transition: "transform .2s ease",
  [theme.breakpoints.down("sm")]: {
    gridTemplateColumns: "1fr",
    gridTemplateRows: "repeat(6, 1fr)",
    width: "100%",
  },
}));
