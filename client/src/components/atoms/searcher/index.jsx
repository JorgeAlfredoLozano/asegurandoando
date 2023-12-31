import React, { useState } from "react";
import { Search } from "lucide-react";

function Searcher({ onSearch }) {
  const [searchValue, setSearchValue] = useState("");
  return (
    <label className="rounded-xl bg-primary-1 flex items-center overflow-hidden">
      <button
        onClick={() => onSearch(searchValue)}
        className="focus:outline-secondary-3 focus:bg-secondary-3 focus:bg-opacity-20 hover:bg-secondary-3 hover:bg-opacity-20 transition-colors duration-500"
      >
        <Search className="text-primary-2 block  w-auto h-auto py-1 px-2 border-r-2 border-primary-2 " />
      </button>
      <input
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
        type="text"
        className="text-primary-2 bg-transparent p-1 rounded-xl focus:outline-secondary-3 ml-1 w-40"
      />
    </label>
  );
}

export default Searcher;
