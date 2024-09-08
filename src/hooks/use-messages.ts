import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

interface Message {
  text: string;
  isUser: boolean;
}

const MESSAGES_KEY = "chat-messages";

export const useMessages = () => {
  const queryClient = useQueryClient();

  const { data: messages = [] } = useQuery<Message[]>({
    queryKey: [MESSAGES_KEY],
    queryFn: () => {
      // const storedMessages = localStorage.getItem(MESSAGES_KEY);
      // return storedMessages ? JSON.parse(storedMessages) : [];
      return [];
    },
  });

  const addMessage = useMutation({
    mutationFn: async (newMessage: Message) => {
      const updatedMessages = [...messages, newMessage];
      localStorage.setItem(MESSAGES_KEY, JSON.stringify(updatedMessages));
      return updatedMessages;
    },
    onSuccess: (updatedMessages) => {
      queryClient.setQueryData([MESSAGES_KEY], updatedMessages);
    },
  });

  return {
    messages,
    addMessage: (newMessage: Message) => addMessage.mutate(newMessage),
  };
};
