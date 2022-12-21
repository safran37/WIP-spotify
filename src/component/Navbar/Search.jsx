import React from "react";
import { BsSearch } from "react-icons/bs";

export default function Search() {
  return (
    <div className="mr-auto ml-4 relative">
      <label
        htmlFor="search-input"
        className="text-black w-12 h-10 flex items-center justify-center absolute left-0 top-0"
      >
        <BsSearch size={20} />
      </label>
      <input
        type="text"
        autoFocus={true}
        id="search-input"
        placeholder="Sanatçılar,Şarkılar veya podcastler"
        className="h-10 bg-white font-semibold text-black pl-14 outline-none rounded-3xl placeholder-black/50 max-w-full w-[22.75rem] text-sm"
      />
    </div>
  );
}
