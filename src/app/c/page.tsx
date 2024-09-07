"use client";

import React, { useEffect, useRef, useState } from "react";

interface Message {
  text: string;
  isUser: boolean;
}

interface ChatMessageProps {
  message: string;
  isUser: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ message, isUser }) => (
  <div className={`chat ${isUser ? "chat-end" : "chat-start"}`}>
    <div
      className={`chat-bubble ${
        isUser ? "chat-bubble-neutral-content" : "chat-bubble-primary"
      }`}
    >
      {message}
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
          { text: "This is a sample response.", isUser: false },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg.text} isUser={msg.isUser} />
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="bg-base-300">
        <form onSubmit={handleSend} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setInput(e.target.value)
            }
            className="input input-bordered flex-1 mr-2"
            placeholder="Type your message..."
          />
          <button type="submit" className="btn btn-primary">
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
