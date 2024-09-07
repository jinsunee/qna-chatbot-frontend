import { BsLayoutSidebar, BsList } from "react-icons/bs";

export const NavigationBar = ({
  toggleSidebar,
  isSidebarOpen,
}: {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) => (
  <div className="navbar bg-base-100 p-4">
    <div className="flex-none">
      {!isSidebarOpen && (
        <button className="btn btn-square btn-ghost" onClick={toggleSidebar}>
          <BsLayoutSidebar size={20} />
        </button>
      )}
    </div>
    <div className="flex-1">
      <span className="text-base">현재 페이지 제목</span>
    </div>
  </div>
);

export const MobileNavigationBar = ({
  toggleSidebar,
  isSidebarOpen,
}: {
  toggleSidebar: () => void;
  isSidebarOpen: boolean;
}) => (
  <div className="navbar bg-base-100 p-4">
    <div className="flex-none">
      {!isSidebarOpen && (
        <button className="btn btn-square btn-ghost" onClick={toggleSidebar}>
          <BsList className="" size={20} />
        </button>
      )}
    </div>
    <div className="flex-1">
      <span className="text-base">현재 페이지 제목</span>
    </div>
  </div>
);
