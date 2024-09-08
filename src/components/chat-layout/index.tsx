"use client";

import { PropsWithChildren, useState } from "react";
import { MobileNavigationBar, NavigationBar } from "./navigation-bar";
import { Sidebar } from "./side-bar";
import { MobileDrawer } from "./side-bar/mobile-drawer";

const ChatLayout = ({ children }: PropsWithChildren) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      {/* PC View */}
      <div className="hidden lg:flex h-screen flex-row">
        <Sidebar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="flex-1 flex flex-col overflow-hidden">
          <NavigationBar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
      </div>
      {/* Mobile View */}
      <div className="lg:hidden h-screen flex flex-col">
        <div className="flex-1 flex flex-col overflow-hidden">
          <MobileNavigationBar
            toggleSidebar={toggleSidebar}
            isSidebarOpen={isSidebarOpen}
          />
          <main className="flex-1 overflow-auto">{children}</main>
        </div>
        <MobileDrawer
          toggleSidebar={toggleSidebar}
          isSidebarOpen={isSidebarOpen}
        />
      </div>
    </>
  );
};

export default ChatLayout;
