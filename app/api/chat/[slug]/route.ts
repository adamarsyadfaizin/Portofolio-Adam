import { NextResponse } from "next/server";

export const DELETE = async (
  req: Request,
  { params }: { params: { slug: string } },
) => {
  try {
    const id = params.slug;
    if (global.__localMessages) {
      global.__localMessages = global.__localMessages.filter(
        (m) => String(m.id) !== String(id),
      );
    }
    return NextResponse.json("Data saved successfully", { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 },
    );
  }
};
