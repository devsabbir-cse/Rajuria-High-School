// app/api/head-teacher/route.js
import mysql from "mysql2/promise";

// MySQL Database Config
const dbConfig = {
  host: "localhost",
  user: "root",
  password: "",
  database: "school_management_system",
};

// =========================
//        GET METHOD
// =========================
export async function GET() {
  let connection;

  try {
    connection = await mysql.createConnection(dbConfig);

    const [rows] = await connection.execute("SELECT * FROM headteacher");

    return new Response(JSON.stringify(rows), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("GET Error:", error);
    return new Response(JSON.stringify({ error: "Database fetch failed" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    if (connection) await connection.end();
  }
}

// =========================
//        PUT METHOD
// =========================
import fs from "fs";
import path from "path";

// MySQL Database Config


export async function PUT(req) {
  let connection;

  try {
    const form = await req.formData();

    // Receive fields
    const id = form.get("id");
    const PDS_id = form.get("PDS_id");
    const পদবী = form.get("পদবী");
    const নাম = form.get("নাম");
    const ফোন = form.get("ফোন");
    const ইমেইল = form.get("ইমেইল");
    const ঠিকানা = form.get("ঠিকানা");
    const শিক্ষাগত_যোগ্যতা = form.get("শিক্ষাগত_যোগ্যতা");
    const ট্রেনিং = form.get("ট্রেনিং");
    const জাতীয়তা = form.get("জাতীয়তা");
    const জাতীয়_পরিচয়_নং = form.get("জাতীয়_পরিচয়_নং");
    const রক্তের_গ্রুপ = form.get("রক্তের_গ্রুপ");
    const জন্মতারিখ = form.get("জন্মতারিখ");
    const যোগদানের_তারিখ = form.get("যোগদানের_তারিখ");

    const imageFile = form.get("ছবি"); // <-- File Coming Here

    if (!id) {
      return new Response(JSON.stringify({ error: "ID is required" }), { status: 400 });
    }

    // ==========================
    //   SAVE / REPLACE IMAGE
    // ==========================
    if (imageFile && imageFile.name) {
      const buffer = Buffer.from(await imageFile.arrayBuffer());

      const uploadPath = path.join(process.cwd(), "public", "head-teacher", "head-teacher.jpg");

      fs.writeFileSync(uploadPath, buffer);
    }

    // ==========================
    //       UPDATE DATABASE
    // ==========================
    connection = await mysql.createConnection(dbConfig);

    const query = `
      UPDATE headteacher 
      SET PDS_id=?, পদবী=?, নাম=?, ফোন=?, ইমেইল=?, ঠিকানা=?, 
          শিক্ষাগত_যোগ্যতা=?, ট্রেনিং=?, জাতীয়তা=?, 
          জাতীয়_পরিচয়_নং=?, রক্তের_গ্রুপ=?, জন্মতারিখ=?, যোগদানের_তারিখ=?
      WHERE id=?
    `;

    const values = [
      PDS_id,
      পদবী,
      নাম,
      ফোন,
      ইমেইল,
      ঠিকানা,
      শিক্ষাগত_যোগ্যতা,
      ট্রেনিং,
      জাতীয়তা,
      জাতীয়_পরিচয়_নং,
      রক্তের_গ্রুপ,
      জন্মতারিখ,
      যোগদানের_তারিখ,
      id
    ];

    await connection.execute(query, values);

    return new Response(JSON.stringify({ message: "Head Teacher Updated Successfully" }), {
      status: 200,
    });

  } catch (error) {
    console.error("PUT Error:", error);
    return new Response(JSON.stringify({ error: "Update failed" }), { status: 500 });
  }
}

