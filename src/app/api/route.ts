import { NextResponse } from "next/server";
import database from "../lib/db";

export const GET = async () => {
  try {
    const db = await database.getConnection();
    console.log("Connected to database");
    console.log(db);
    const query = `SELECT * FROM lessons`;
    const rows = await db.execute(query);
    db.release();
    return NextResponse.json(rows[0]);
  } catch (error) {
    return NextResponse.json(
      { error: error },
      { status: 500 }
    );
  }
};
