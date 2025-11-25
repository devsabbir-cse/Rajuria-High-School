import Papa from "papaparse";

export const getNewsTickerData = async () => {
  const sheetId = "1ULtD-eWDOfWNtRmwLnSO01RuMGKvEDIc_iwIi7jJ0h4";
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

  try {
    const res = await fetch(url, { cache: "no-cache" });
    const csvText = await res.text();

    // FIX: remove empty / null / BOM lines
    const cleanCSV = csvText
      .split("\n")
      .filter(line => line && line.trim() !== "")
      .join("\n");

    const parsed = Papa.parse(cleanCSV, {
      header: true,
      skipEmptyLines: true,
    });

    return parsed.data;

  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return null;
  }
};
