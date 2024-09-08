"use client";

import MarkdownViewer from "@/components/markdown-viewer";
import React, { useEffect, useRef, useState } from "react";
import { BsSendFill } from "react-icons/bs";
import { FaRobot } from "react-icons/fa";

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatMessageProps {
  message: string;
  isUser?: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message }) => (
  <div className="chat chat-end">
    <div className="chat-bubble chat-bubble-primary">{message}</div>
  </div>
);

const AiResponseMessage: React.FC<ChatMessageProps> = ({ message }) => (
  <div className="flex gap-2 w-full">
    <div className="rounded-full flex justify-center items-center border-2 border-base-300 w-10 h-10">
      <FaRobot size={20} className="text-primary" />
    </div>
    <div className="flex-1 overflow-hidden">
      <MarkdownViewer content={message} />
    </div>
  </div>
);

export default function Chats(): JSX.Element {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
      setInput("");
      // Here you would typically send the message to your backend
      // and then add the response to the messages
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          {
            text: `이 오류는 Vercel이 빌드 결과물을 찾지 못해서 발생한 것 같습니다. Next.js 프로젝트의 경우 기본 출력 디렉토리가 "dist"가 아니라 ".next"입니다. 이 문제를 해결하기 위해 다음과 같은 방법들을 시도해볼 수 있습니다:

1. Vercel 프로젝트 설정 변경:
   Vercel 대시보드에서 해당 프로젝트의 설정으로 가서 "Build and Output Settings"를 찾습니다. 여기서 "Output Directory"를 ".next"로 변경하세요.

2. vercel.json 파일 사용:
   프로젝트 루트에 vercel.json 파일을 만들고 다음 내용을 추가합니다:

\`\`\`
   {
     "outputDirectory": ".next"
   }
\`\`\`
  

3. package.json 스크립트 확인:
   package.json 파일에서 "build" 스크립트가 올바르게 설정되어 있는지 확인하세요. 일반적으로 다음과 같이 되어 있어야 합니다:

   \`\`\`
   "scripts": {
     "build": "next build"
   }
     \`\`\`

4. next.config.js 확인:
   만약 next.config.js 파일에서 출력 디렉토리를 변경했다면, 이를 Vercel 설정과 일치시켜야 합니다.

이 중 가장 간단한 방법은 Vercel 프로젝트 설정에서 출력 디렉토리를 ".next"로 변경하는 것입니다. 이렇게 하면 대부분의 경우 문제가 해결될 것입니다.

이 방법들을 시도해보시고 여전히 문제가 지속된다면, 프로젝트의 구조나 설정에 대해 더 자세히 알려주시면 추가적인 도움을 드릴 수 있습니다.

            `,
            isUser: false,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 flex flex-col gap-2">
          {messages.map((msg, index) => (
            <>
              {msg.isUser && <ChatMessage key={index} message={msg.text} />}
              {!msg.isUser && (
                <AiResponseMessage key={index} message={msg.text} />
              )}
            </>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>
      <div className="p-4">
        <form onSubmit={handleSend} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
            className="input input-bordered flex-1 mr-2"
            placeholder="질문 입력"
          />
          <button type="submit" className="btn btn-primary">
            <BsSendFill size={20} />
          </button>
        </form>
      </div>
    </div>
  );
}
