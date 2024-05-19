import { actions } from "./constants";
import { RootState } from "../../store";
import { showToastr } from "./slice";
import { Middleware } from "@reduxjs/toolkit";

const toastrMiddleware: Middleware<{}, RootState> =
  (store) => (next) => (action: any) => {
    const result = next(action);

    console.log(action.type);

    if (actions.includes(action.type)) {
      store.dispatch(
        showToastr({
          message: action.payload.message,
          severity: action.payload.severity,
        })
      );
    }

    return result;
  };
export default toastrMiddleware;
