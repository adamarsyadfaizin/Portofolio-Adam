import { type NextRequest, NextResponse } from "next/server";

import { getAchievementsData } from "@/services/achievements";

export const GET = async (req: NextRequest) => {
  try {
    const { searchParams } = new URL(req.url);

    const category = searchParams.get("category") || undefined;
    const type = searchParams.get("type") || undefined;
    const search = searchParams.get("search") || undefined;

    const data = await getAchievementsData({ category, type, search });

    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
