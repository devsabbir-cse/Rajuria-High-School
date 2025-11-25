export const getNewsTickerData = async () => {
  const sheetId = "1jhaVa3VzVsSXyxFLixFVqlW9ZUYVHdG4IRS22PO2F_k";
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/export?format=csv`;

  try {
    const res = await fetch(url, { cache: "no-cache" });
    const csvText = await res.text();

    // CSV সাধারণত ২ লাইন: header + data
    const lines = csvText.split("\n");

    const header = lines[0].trim().replace(/"/g, "");
    const value = lines[1].trim().replace(/"/g, ""); // FULL TEXT

    return { [header]: value };

  } catch (error) {
    console.error("Error fetching sheet data:", error);
    return null;
  }
};
