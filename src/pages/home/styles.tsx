import { styled } from "@mui/material/styles";

export const MainContainer = styled("main")(({ theme }) => ({
  backgroundColor: "#082032",
  display: "flex",
  justifyContent: "center",
  padding: "calc(50px + 60px) 0 50px",
  [theme.breakpoints.down("xl")]: {
    padding: "calc(50px + 60px) 30px 50px",
  },
}));

export const InnerContainer = styled("div")(({ theme }) => ({
  width: "1200px",
  display: "flex",
  flexDirection: "column",
  gap: "50px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
  },
}));
