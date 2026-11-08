import { NextResponse } from "next/server";
import { getMonkeytypeData } from "@/services/monkeytype";

export const GET = async () => {
  try {
    const response = await getMonkeytypeData();
    if (response.status >= 400 || !response.data?.typingStats) {
      return NextResponse.json(
        { message: "Failed to fetch Monkeytype data" },
        { status: 502 },
      );
    }
    return NextResponse.json(response.data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 },
    );
  }
};
