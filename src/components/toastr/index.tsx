import { useEffect, useState } from "react";
import { hideToastr } from "../../features/toastr/slice";
import { useAppDispatch, useAppSelector } from "../../store";
import { Alert, Snackbar } from "@mui/material";

function Toastr() {
  const dispatch = useAppDispatch();

  const { open, message, severity } = useAppSelector((state) => state.toastr);

  const [displayKey, setDisplayKey] = useState(0);

  useEffect(() => {
    if (open && message) {
      setDisplayKey((prevKey) => prevKey + 1);
    }
  }, [open, message]);

  const handleClose = (
    _event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(hideToastr());
  };

  if (!open || !message || !severity) {
    return null;
  }

  return (
    <Snackbar
      key={displayKey}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={open}
      onClose={handleClose}
      autoHideDuration={5000}
    >
      <Alert onClose={handleClose} severity={severity}>
        {message}
      </Alert>
    </Snackbar>
  );
}

export default Toastr;
