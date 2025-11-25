import Papa from "papaparse";

export const getStuffData = async () => {
  const sheetId = "1Sb8W_G2Mv8gD5T-f6C6mKq0p0dBy3img";
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
