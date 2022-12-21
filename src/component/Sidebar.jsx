import React from "react";
import logo from "../img/logo.svg";
import Menu from "./Sidebar/Menu";
import { BsPlusSquare } from "react-icons/bs";
import { GoHeart } from "react-icons/go";
import Playlist from "./Sidebar/Playlist";
import DownloadApp from "./Sidebar/DownloadApp";
import { useSelector } from "react-redux";
import SidebarCover from "./Sidebar/SidebarCover";

export default function Sidebar() {
  const sidebar = useSelector((state) => state.player.sidebar);
  return (
    <aside className="w-60 flex-shrink-0 pt-6 flex flex-col bg-black">
      <a href="#" className="mb-7 px-6">
        <img src={logo} className="h-10" />
      </a>
      <Menu />
      <nav className="mt-6 px-5">
        <ul className="flex flex-col gap-y-4">
          <li>
            <a href="#" className="flex gap-x-3 text-link group">
              <BsPlusSquare
                size={24}
                className="bg-white bg-opacity-60 rounded-sm group-hover:bg-opacity-100 text-black "
              />
              <span className="group-hover:text-white font-semibold">
                Çalma Listesi Oluştur
              </span>
            </a>
          </li>
          <li>
            <a href="#" className="flex gap-x-3 group rounded-sm text-link">
              <div className="bg-gradient-to-r from-linear1 group to-linear2 bg-opacity-60 group-hover:bg-opacity-100 h-6 w-6 rounded-sm">
                <GoHeart
                  size={20}
                  className="text-link mx-auto mt-1 rounded-sm group-hover:text-white"
                />
              </div>
              <span className="group-hover:text-white font-semibold">
                Beğenilen Şarkılar
              </span>
            </a>
          </li>
        </ul>
      </nav>
      <Playlist />
      <DownloadApp />
      {sidebar && <SidebarCover />}
    </aside>
  );
}
