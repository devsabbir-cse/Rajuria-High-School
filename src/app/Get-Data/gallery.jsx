export const getGalleryData = async () => {
  const sheetId = "1Dvq7CHqj064WSIPd0ujToi8hlghkeCAVY0PGZT5z3NI";
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

  try {
    const res = await fetch(url, { cache: "no-cache" });
    const csvText = await res.text();

    const rows = csvText.split("\n").map(r => r.split(","));

    const headers = rows[0];              // First row → keys
    const data = rows.slice(1).map(row =>
      Object.fromEntries(headers.map((key, i) => [key.trim(), row[i]?.trim()]))
    );

    return data;   // JSON return!

  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return null;
  }
};