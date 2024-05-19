import RequestUtils from "../../utils/request-utils";
import { CreateRequestPayload } from "./types";

const CONTACTS_BASE_URL = `${import.meta.env.VITE_API_URL}/api/contacts`;

const create = async (requestPayload: CreateRequestPayload) => {
  return RequestUtils.post(CONTACTS_BASE_URL, requestPayload);
};

export const contactsService = {
  create,
};
