import { Divider } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Section = styled("section")({
  display: "flex",
  flexDirection: "column",
  color: "#fff",
  lineHeight: "1.5",
  gap: "20px",
});

export const CardsContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    alignItems: "normal",
    gap: "10px",
  },
}));

export const CardWrapper = styled("div")({
  display: "flex",
  width: "100%",
  position: "relative",
});

export const LeftCardWrapper = styled(CardWrapper)(({ theme }) => ({
  justifyContent: "flex-start",
  [theme.breakpoints.down("md")]: {
    justifyContent: "normal",
    width: "100%",
    marginLeft: "10px",
  },
}));

export const RightCardWrapper = styled(CardWrapper)(({ theme }) => ({
  justifyContent: "flex-end",
  [theme.breakpoints.down("md")]: {
    justifyContent: "normal",
    width: "100%",
    marginLeft: "10px",
  },
}));

export const Diamond = styled("span")(({ theme }) => ({
  display: "block",
  height: "12px",
  width: "12px",
  backgroundColor: "#082032",
  border: "2px solid #fff",
  position: "absolute",
  left: "calc(50% - 12px / 2)",
  transform: "rotate(45deg)",
  top: "calc(30px + (30px / 2) - (12px / 2))",
  [theme.breakpoints.down("md")]: {
    left: "-35px",
  },
}));

export const VerticalDivider = styled(Divider)(({ theme }) => ({
  position: "absolute",
  borderRightWidth: "3px",
  borderColor: "#fff",
  [theme.breakpoints.down("md")]: {
    display: "flex",
    left: "-20px",
  },
}));

export const TitleWrapper = styled("div")({
  display: "flex",
});

export const Title = styled("h1")(({ theme }) => ({
  fontSize: "24px",
  borderBottom: "2px solid #ff4c29",
  padding: "5px 0",
  [theme.breakpoints.down("lg")]: {
    fontSize: "22px",
  },
}));
