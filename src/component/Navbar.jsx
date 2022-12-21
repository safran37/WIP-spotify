import React from "react";
import Navigation from "./Navbar/Navigation";
import User from "./Navbar/User";
import { Route, Routes } from "react-router-dom";
import Search from "./Navbar/Search";

export default function Navbar() {
  return (
    <nav className="h-[3.75rem] flex items-center justify-between px-8">
      <Navigation />
      <Routes>
        <Route path="/search" element={<Search />} />
      </Routes>
      <User />
    </nav>
  );
}
