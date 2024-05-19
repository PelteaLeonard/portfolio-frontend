import { ResponseError } from "../../types/features-types";
import { contactsService } from "./service";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { CreateRequestPayload, CreateResponsePayload } from "./types";

export const createContact = createAsyncThunk<
  CreateResponsePayload,
  CreateRequestPayload,
  { rejectValue: ResponseError }
>("contacts/create", async (data, { rejectWithValue }) => {
  const response = await contactsService.create(data);

  const responsePayload = await response.json();

  if (response.status < 200 || response.status >= 300) {
    return rejectWithValue(responsePayload as ResponseError);
  }
  return responsePayload as CreateResponsePayload;
});
