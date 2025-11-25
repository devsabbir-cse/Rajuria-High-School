import Papa from "papaparse";

export const getHeadTeacherData = async () => {
  const sheetId = "1RbS8qVWNFeDqM9wVKRFE4FN57ZadOg7P";
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


// export const getHeadTeacherData = async () => {
//   const url = "http://localhost:3000/api/head-teacher";

//   try {
//     const res = await fetch(url, { cache: "no-cache" });

//     if (!res.ok) {
//       throw new Error("Failed to fetch headteacher data");
//     }

//     const data = await res.json();

//     return data; // Direct JSON from your API (rows from MySQL)

//   } catch (error) {
//     console.error("Error fetching headteacher data:", error);
//     return null;
//   }
// };
