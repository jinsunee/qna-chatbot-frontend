import { FC } from "react";
import ReactMarkdown from "react-markdown";

interface Props {
  content: string;
}

const MarkdownViewer: FC<Props> = ({ content }) => {
  return <ReactMarkdown>{content}</ReactMarkdown>;
};

export default MarkdownViewer;
