"use server";

export const genarateUploadUrl = async (name: string) => {
  return (
    await fetch("https://mail-app-mu.vercel.app/api/files", {
      method: "POST",
      body: name,
    })
  ).json();
};

export const uploadFile = async (formData: FormData) => {
  return (
    await fetch("https://mail-app-mu.vercel.app/api/files", {
      method: "POST",
      body: formData,
    })
  ).json();
};

export const downloadFile = async () => {
  return (await fetch("https://mail-app-mu.vercel.app/api/files")).blob();
};
