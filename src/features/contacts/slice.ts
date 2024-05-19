import { Status } from "../../enums/status-enums";
import { RootState } from "../../store";
import { initialState } from "./state";
import { createContact } from "./thunks";
import { ContactsFunctionality } from "./constants";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    reset: (state, { payload }: PayloadAction<ContactsFunctionality>) => {
      state.statuses[payload] = Status.Idle;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createContact.pending, (state) => {
        state.statuses.create = Status.Pending;
      })
      .addCase(createContact.fulfilled, (state) => {
        state.statuses.create = Status.Fulfilled;
      })
      .addCase(createContact.rejected, (state) => {
        state.statuses.create = Status.Rejected;
      });
  },
});

export const selectStatusByFunctionality = (
  state: RootState,
  functionality: ContactsFunctionality
) => state.contacts.statuses[functionality];

export const { reset } = contactsSlice.actions;
export default contactsSlice.reducer;
