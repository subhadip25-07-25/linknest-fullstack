import React from "react";
import {
  Plus,
  GraduationCap,
  Code,
  Clapperboard,
  Gamepad2,
  BriefcaseBusiness,
  Palette,
  Globe,
} from "lucide-react";

function Boards() {
  const boards = [
    { name: "Study & Learning", icon: GraduationCap },
    { name: "Technology", icon: Code },
    { name: "Entertainment", icon: Clapperboard },
    { name: "Gaming", icon: Gamepad2 },
    { name: "Career & Jobs", icon: BriefcaseBusiness },
    { name: "Creativity & Design", icon: Palette },
    { name: "General Resources", icon: Globe },
  ];

  return (
    <div className="flex flex-col gap-4 mt-8">
      {/* Boards heading */}
      <div className="flex items-center justify-between">
        <h2 className="text-sm font-semibold text-slate-500">
          YOUR BOARDS
        </h2>

        <button className="text-slate-500 hover:text-indigo-600">
          <Plus size={18} />
        </button>
      </div>

      {/* Board categories */}
      <div className="flex flex-col gap-3">
        {boards.map((board) => {
          const Icon = board.icon;

          return (
            <div
              key={board.name}
              className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 cursor-pointer"
            >
              <Icon size={18} />
              <span className="text-sm">{board.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Boards;