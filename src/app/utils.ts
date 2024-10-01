export const downloadFile = async (file: string) => {
  try {
    const response = await fetch(file, {
      headers: {
        "Content-Type": "application/pdf",
      },
    });

    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = "matteo_bianchi.pdf";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  } catch (error) {
    console.error("Errore durante il download del file:", error);
  }
};
