import React from 'react'
import { Link2, House, Bookmark ,SquareLibrary , Compass } from "lucide-react";
import Boards from './Boards';
import SidebarFooter from './SidebarFooter';
function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-white border-r p-5 flex flex-col">
      <div className="flex items-center gap-2">
        <Link2 size={28} className="text-indigo-600" />
        <h1 className="text-2xl font-bold">LinkNest</h1>
      </div>

      <div className="flex items-center gap-2">
        <House size={28} className="text-indigo-600" />
        <span>Dashboard</span>
      </div>
     <div className="flex items-center gap-2">
        < Compass size={28} className="text-indigo-600" />
        <span>Explore</span>
      </div>
      <div className="flex items-center gap-2">
        <Bookmark size={28} className="text-indigo-600" />
        <span>My Library</span>
      </div>
      <div className="flex items-center gap-2">
        < SquareLibrary size={28} className="text-indigo-600" />
        <span>My collections</span>
      </div>
       <Boards/>
       <br />
       <SidebarFooter/>
    </aside>
  );
}

export default Sidebar;