"use client";

import { fetchAnswer } from "@/apis/fetch-answer";
import MarkdownViewer from "@/components/markdown-viewer";
import { useMessages } from "@/hooks/use-messages";
import { useMutation } from "@tanstack/react-query";
import React, { Fragment, useEffect, useRef, useState } from "react";
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
  const { messages, addMessage } = useMessages();
  const [input, setInput] = useState<string>("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = (): void => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const mutation = useMutation({
    mutationFn: fetchAnswer,
    onSuccess: (data) => {
      addMessage({ text: data.answer, isUser: false });
    },
  });

  const handleSend = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (input.trim()) {
      addMessage({ text: input, isUser: true });
      mutation.mutate(input);
      setInput("");
    }
  };
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        <div className="p-4 flex flex-col gap-2">
          {messages.map((msg, index) => (
            <Fragment key={index}>
              {msg.isUser && <ChatMessage key={index} message={msg.text} />}
              {!msg.isUser && (
                <AiResponseMessage key={index} message={msg.text} />
              )}
            </Fragment>
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
