"use server";

import { FieldValues } from "react-hook-form";

export const sendMail = async (formData: FieldValues) => {
  return (
    await fetch("https://mail-app-mu.vercel.app/api/mails", {
      method: "POST",
      body: JSON.stringify(formData),
    })
  ).json();
};

export const sendNotif = async (formData: FieldValues) => {
  return (
    await fetch("https://mail-app-mu.vercel.app/api/notifs", {
      method: "POST",
      body: JSON.stringify(formData),
    })
  ).json();
};
