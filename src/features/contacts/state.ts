import TypesUtils from "../../utils/types-utils";
import { Status } from "../../enums/status-enums";
import { ContactsState } from "./types";
import { ContactsFunctionality } from "./constants";

export const initialState: ContactsState = {
  statuses: TypesUtils.initRecord(
    Object.values(ContactsFunctionality),
    Status.Idle
  ),
};
