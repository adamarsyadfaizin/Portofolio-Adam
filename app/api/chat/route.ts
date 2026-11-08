import { NextResponse } from "next/server";
import { MOCK_MESSAGES } from "@/common/constants/mockData";
import { MessageProps } from "@/common/types/chat";

declare global {
  // eslint-disable-next-line no-var
  var __localMessages: MessageProps[] | undefined;
}

if (!global.__localMessages) {
  global.__localMessages = [...MOCK_MESSAGES];
}

export const GET = async () => {
  return NextResponse.json(global.__localMessages || [], { status: 200 });
};

export const POST = async (req: Request) => {
  try {
    const body = await req.json();
    const newMessage: MessageProps = {
      id: `msg-${Date.now()}`,
      created_at: new Date().toISOString(),
      is_show: true,
      ...body,
    };
    if (!global.__localMessages) {
      global.__localMessages = [...MOCK_MESSAGES];
    }
    global.__localMessages.unshift(newMessage);
    return NextResponse.json("Data saved successfully", { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      { message: "Internal Server Error", error: error.message },
      { status: 500 },
    );
  }
};
