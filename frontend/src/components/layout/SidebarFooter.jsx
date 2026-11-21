import React from "react";
import { Settings, Info, Heart } from "lucide-react";

function SidebarFooter() {
  return (
    <div className="flex flex-col gap-6 mt-auto">

      {/* Settings and About */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 cursor-pointer">
          <Settings size={18} />
          <span className="text-sm">Settings</span>
        </div>

        <div className="flex items-center gap-3 text-slate-600 hover:text-indigo-600 cursor-pointer">
          <Info size={18} />
          <span className="text-sm">About</span>
        </div>
      </div>

      {/* Help Card */}
      <div className="bg-indigo-50 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-2">
          <Heart size={18} className="text-indigo-600" />
          <h3 className="font-semibold text-slate-800 text-sm">
            Help LinkNest Grow
          </h3>
        </div>

        <p className="text-xs text-slate-500 mb-3">
          Share LinkNest with friends and help our community grow.
        </p>

        <button className="w-full bg-indigo-600 text-white text-sm py-2 rounded-lg hover:bg-indigo-700 transition-colors">
          Share LinkNest
        </button>
      </div>

    </div>
  );
}

export default SidebarFooter;