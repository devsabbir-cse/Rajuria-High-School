import { Pool } from "pg";

const pool = new Pool({
  connectionString:
    "postgresql://neondb_owner:npg_swTgGV21IXlY@ep-dark-fog-adl1lw9x-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
  ssl: { rejectUnauthorized: false }, // required for Neon
});

export async function GET() {
  try {
    const client = await pool.connect();

    const result = await client.query("SELECT heading FROM notice");

    client.release();

    // শুধু heading এর array বানানো
    const headings = result.rows.map(row => row.heading);

    return new Response(JSON.stringify({ heading: headings }, null, 2), {
      headers: { "Content-Type": "application/json" },
      status: 200,
    });
  } catch (error) {
    console.error("❌ Database Error:", error);
    return new Response(
      JSON.stringify({ error: "Database connection failed" }),
      { status: 500 }
    );
  }
}



//post............................
// import mysql from "mysql2/promise";

// export async function POST(request) {
//   try {
//     const body = await request.json();
//     const { class_name } = body;

//     if (!class_name) {
//       return new Response(
//         JSON.stringify({ error: "class_name field is required" }),
//         { status: 400 }
//       );
//     }

//     const connection = await mysql.createConnection({
//       host: "localhost",
//       user: "root",
//       password: "",
//       database: "school_management_system",
//     });

//     const [result] = await connection.execute(
//       "INSERT INTO routines (class_name) VALUES (?)",
//       [class_name]
//     );

//     await connection.end();

//     return new Response(
//       JSON.stringify({
//         message: "Class name inserted successfully",
//         insertedId: result.insertId,
//       }),
//       { status: 201, headers: { "Content-Type": "application/json" } }
//     );
//   } catch (error) {
//     console.error(error);
//     return new Response(
//       JSON.stringify({ error: "Database error: " + error.message }),
//       { status: 500 }
//     );
//   }
// }
