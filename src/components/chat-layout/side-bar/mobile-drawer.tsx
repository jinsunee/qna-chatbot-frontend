import { FC } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Content } from "./content";

const TITLE = "QnA 서비스";

interface Props {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export const MobileDrawer: FC<Props> = ({ isSidebarOpen, toggleSidebar }) => {
  return (
    <div className="drawer">
      <input
        id="my-drawer"
        type="checkbox"
        className="drawer-toggle"
        checked={isSidebarOpen}
        onChange={toggleSidebar}
      />
      <div className="drawer-side">
        <label htmlFor="my-drawer" className="drawer-overlay" />
        <div className="w-80 min-h-full bg-base-200 text-base-content">
          <div className="px-4 py-2 flex justify-between items-center">
            <div className="text-xl font-bold">{TITLE}</div>
            <button
              className="btn btn-square btn-ghost"
              onClick={toggleSidebar}
            >
              <AiOutlineClose size={20} />
            </button>
          </div>
          <Content />
        </div>
      </div>
    </div>
  );
};
