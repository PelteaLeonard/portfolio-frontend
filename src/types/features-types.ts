import { Severity } from "../enums/severity-enums";

export interface Message {
  message: string;
  severity: Severity;
}

export interface ResponseError extends Message {}
