"use client";

import { useParams } from "next/navigation";

export default function Chat() {
  const { chatId } = useParams();

  return (
    <div>
      <div>Hello World!</div>
      <div>ChatId: {chatId}</div>
    </div>
  );
}
