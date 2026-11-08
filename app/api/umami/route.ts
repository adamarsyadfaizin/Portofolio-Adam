import { type NextRequest, NextResponse } from "next/server";
import { getAllWebsiteData } from "@/services/umami";

export const dynamic = "force-dynamic";

export const GET = async (req: NextRequest) => {
  try {
    const combinedData = await getAllWebsiteData();
    return NextResponse.json(combinedData, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
