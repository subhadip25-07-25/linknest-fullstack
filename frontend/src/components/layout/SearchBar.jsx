import { Search } from "lucide-react";
function SearchBar() {
  return (
    <div className="flex items-center gap-3 border border-slate-200 rounded-xl px-4 py-2">
      <Search size={20} className="text-slate-400" />

      <input
        type="text"
        placeholder="Search resources, boards..."
        className="outline-none bg-transparent flex-1"
      />
    </div>
  );
}

export default SearchBar;