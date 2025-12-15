import React, { useContext } from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import { AuthContext } from "../../context/AuthContext";
import Header from "./Header";

function AppLayout({ children }) {
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="w-full min-h-screen bg-[#F3F4FF]">
      <div className="flex flex-col min-h-screen">
        {isLoggedIn ? <Header /> : <Navbar />}
        {isLoggedIn && <Sidebar />}
        <main className="w-full flex-1 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}

export default AppLayout;
