import { styled } from "@mui/material/styles";
import { BiSolidRightArrow, BiSolidLeftArrow } from "react-icons/bi";

interface IContainerProps {
  arrow: string;
}

export const Container = styled("div")<IContainerProps>(({ theme, arrow }) => ({
  display: "flex",
  width: "360px",
  backgroundColor: "#15314B",
  flexDirection: "column",
  padding: "28px",
  gap: "6px",
  position: "relative",
  textAlign: "justify",
  "::before": {
    content: '""',
    position: "absolute",
    left: "-20px",
    top: "35px",
    borderWidth: `${arrow === "left" ? "10px" : "0"}`,
    borderStyle: "solid",
    borderColor: "transparent #15314B transparent transparent",
  },
  "::after": {
    content: '""',
    position: "absolute",
    right: "-20px",
    top: "35px",
    borderWidth: `${arrow === "right" ? "10px" : "0"}`,
    borderStyle: "solid",
    borderColor: "transparent transparent transparent #15314B",
  },
  [theme.breakpoints.down("md")]: {
    width: "auto",
    flex: "1",
    "::before": {
      borderWidth: "10px",
    },
    "::after": {
      borderWidth: "0",
    },
  },
}));

export const Title = styled("h2")({
  display: "flex",
  fontSize: "18px",
});

export const Date = styled("p")({});

export const Paragraph = styled("p")({
  display: "flex",
  fontSize: "12px",
});

export const ArrowRightIcon = styled(BiSolidRightArrow)({
  display: "flex",
  fontSize: "30px",
  color: "#15314B",
  position: "absolute",
  top: "30px",
  right: "-15px",
});

export const ArrowLeftIcon = styled(BiSolidLeftArrow)({
  display: "flex",
  fontSize: "30px",
  color: "#15314B",
  position: "absolute",
  top: "30px",
  left: "-15px",
});
