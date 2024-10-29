import { ChatRequest } from "@/types/api";
import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  const { msg } = (await req.json()) as ChatRequest;
  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      for (let i = 0; i < msg.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, 100));
        controller.enqueue(encoder.encode(msg[i]));
      }
      controller.close();
    },
  });

  return new Response(stream);
}
