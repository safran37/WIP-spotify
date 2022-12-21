import React from "react";
import { AiOutlineHome, AiOutlineSearch } from "react-icons/ai";
import { VscLibrary } from "react-icons/vsc";
import { NavLink } from "react-router-dom";

export default function Menu() {
  return (
    <nav className="px-2">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/"
            className="active:text-white active:bg-active h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4 rounded"
          >
            <AiOutlineHome size={24} />
            Ana sayfa
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/search"
            className="active:text-white active:bg-active h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4"
          >
            <AiOutlineSearch size={24} />
            Ara
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/collection"
            className="active:text-white active:bg-active h-10 flex gap-x-4 items-center text-sm font-semibold text-link hover:text-white px-4"
          >
            <VscLibrary size={24} />
            Kitaplığın
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
