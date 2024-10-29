"use client";
import { useRef, useState } from "react";

const Page = () => {
  const sendMessage = async (data: string) => {
    const resp = await fetch("http://localhost:3000/api/chat", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ msg: data }),
    });
    if (!resp.ok) {
      console.log("error:", resp.statusText);
      return;
    }
    if (!resp.body) {
      console.log("error: body not exist");
      return;
    }
    const decoder = new TextDecoder("utf-8");
    const reader = resp.body.getReader();
    while (true) {
      const result = await reader.read();
      const getTxt = decoder.decode(result.value, { stream: true });
      setResponseTxt((txt) => txt + getTxt);
      if (result.done) {
        console.log("结束");
        break;
      }
    }
  };

  const [responseTxt, setResponseTxt] = useState("");

  const ref = useRef<HTMLInputElement>(null);
  return (
    <div>
      <input type="text" ref={ref} className="outline-dashed" />
      <button onClick={() => sendMessage(ref.current?.value || "")}>
        发送
      </button>
      <div>{responseTxt}</div>
    </div>
  );
};

export default Page;
