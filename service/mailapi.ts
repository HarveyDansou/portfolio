"use server";

import axios from "axios";
import { FieldValues } from "react-hook-form";

export const sendMail = async (formData: FieldValues) => {
  return axios.post("https://mail-app-mu.vercel.app/api/mails", formData);
};

export const sendNotif = async (formData: FieldValues) => {
  return axios.post("https://mail-app-mu.vercel.app/api/notifs", formData);
};
