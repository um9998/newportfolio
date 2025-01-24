import database from "@/app/lib/db";
import { NextResponse } from "next/server";

export async function GET(
  request: Request,
  {
    params,
  }: { params: Promise<{ slug: string[] }> }
) {
  const slug = (await params).slug;
  try {
    const db = await database.getConnection();
    console.log("Connected to database");
    console.log(db);
    const query = `SELECT * FROM ${slug}`;
    const rows = await db.execute(query);
    db.release();
    console.log(request);
    return NextResponse.json(rows[0]);
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "An error occurred" },
      { status: 500 }
    );
  }
}
