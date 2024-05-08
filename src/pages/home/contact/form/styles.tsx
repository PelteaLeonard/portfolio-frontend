import { Button, TextField } from "@mui/material";
import { styled } from "@mui/material/styles";

export const Container = styled("form")(({theme}) => ({
  width: "700px",
  padding: "30px",
  border: "2px solid #ff4c29",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  gap: "20px",
  [theme.breakpoints.down("lg")]: {
    width: "100%",
  },
}));

export const FieldsContainer = styled("div")(({theme}) => ({
  display: "flex",
  justifyContent: "space-between",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    width: "100%",
    gap: "20px",
  },
}));

export const InputField = styled(TextField)({
  borderBottom: "1px solid #ff4c29",
  backgroundColor: "#15314B",
  borderRadius: "5px",
  flex: "1",
  "& input": {
    color: "#fff",
  },
});

export const FieldWrapper = styled("div")({
  display: "flex",
});

export const TextAreaField = styled(InputField)({
  flex: "1",
  "& textarea": {
    color: "#fff",
  },
});

export const Wrapper = styled("div")({
  display: "flex",
});

export const SubmitButton = styled(Button)(({theme}) => ({
  padding: "8px 32px",
  color: "#fff",
  borderBottom: "1px solid #ff4c29",
  borderLeft: "1px solid #ff4c29",
  borderRadius: "5px",
  fontSize: "20px",
  textTransform: "none",
  transition: "1.5s ease",
  ":hover": {
    cursor: "pointer",
    backgroundColor: " #ff4c29",
  },
  [theme.breakpoints.down("lg")]: {
    width: "500px",
    fontSize: "16px",
  },
}));
