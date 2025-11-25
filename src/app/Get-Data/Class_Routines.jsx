import Papa from "papaparse";

export const getClassRoutinesData = async () => {
  const sheetId = "13FNPMI7K_sFq-Beh-dOmWQu1Kq_hX6is9C24wQ4T8JU";
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
