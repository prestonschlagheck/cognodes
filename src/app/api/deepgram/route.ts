import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

export async function GET() {
    return NextResponse.json({
      key: process.env.DEEPGRAM_API_KEY ?? "",
    });
}
