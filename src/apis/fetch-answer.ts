import axiosInstance from "./axios-instance";

interface ApiResponse {
  answer: string;
  sources: any;
}

export const fetchAnswer = async (question: string): Promise<ApiResponse> => {
  const { data } = await axiosInstance.post<ApiResponse>("/query", {
    question,
  });
  return data;
};
