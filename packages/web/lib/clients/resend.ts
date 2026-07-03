import { RESEND_API_KEY } from "@web/lib/config";
import { Resend } from "resend";

export const resend = new Resend(RESEND_API_KEY);
