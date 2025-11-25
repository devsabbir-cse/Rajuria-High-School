import Papa from "papaparse";

export const getNoticeData = async () => {
  const sheetId = "1X20odqw0-EBFoFDYAGxPS5NS5fM4CzKUwPdPdSBLeBU";
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

  try {
    const res = await fetch(url, { cache: "no-cache" });
    const csvText = await res.text();

    // PapaParse দিয়ে CSV parse
    const parsed = Papa.parse(csvText, {
      header: true,       // First row → keys
      skipEmptyLines: true,
    });

    return parsed.data;   // Parsed JSON

  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return null;
  }
};
