import { Status } from "../../enums/status-enums";
import { Message } from "../../types/features-types";
import { ContactsFunctionality } from "./constants";

export interface ContactsState {
  statuses: Record<ContactsFunctionality, Status>;
}

export interface CreateRequestPayload {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

export interface CreateResponsePayload extends Message {}
