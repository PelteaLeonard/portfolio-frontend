import RequestUtils from "../../utils/request-utils";
import { CreateRequestPayload } from "./types";

const BACKEND_API =
  "https://leonard-portfolio-backend-d1a47d594063.herokuapp.com";

const CONTACTS_BASE_URL = `${BACKEND_API}/api/contacts`;

const create = async (requestPayload: CreateRequestPayload) => {
  return RequestUtils.post(CONTACTS_BASE_URL, requestPayload);
};

export const contactsService = {
  create,
};
