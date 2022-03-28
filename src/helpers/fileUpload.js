export const uploadFile = async (file) => {
  // API call to upload file
  const cloudUrl = "https://api.cloudinary.com/v1_1/vance-short/upload";

  // Form data para enviar el archivo
  const formData = new FormData();

  formData.append("upload_preset", "React-JournalApp");
  formData.append("file", file);

  try {
    const response = await fetch(cloudUrl, {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      // extraemos la url de la imagen
      const { secure_url } = await response.json();
      return secure_url;
    } else throw await response.json();
  } catch {
    throw await response.json();
  }
};
