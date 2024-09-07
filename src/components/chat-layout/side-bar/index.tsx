import { FC } from "react";
import { BsLayoutSidebar } from "react-icons/bs";
import { Content } from "./content";

const TITLE = "QnA 서비스";

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const Sidebar: FC<Props> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <aside
      className={`${
        isSidebarOpen ? "w-80" : "w-0"
      } overflow-hidden bg-base-200 min-h-full`}
    >
      <div className="px-4 py-2 flex justify-between items-center">
        <div className="text-xl font-bold">{TITLE}</div>
        <button className="btn btn-square btn-ghost" onClick={toggleSidebar}>
          <BsLayoutSidebar size={20} />
        </button>
      </div>
      <Content />
    </aside>
  );
};
