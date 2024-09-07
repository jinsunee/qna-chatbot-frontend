import ChatLayout from "@/components/chat-layout";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <ChatLayout>{children}</ChatLayout>;
}
