import React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export default function Navigation() {
  const history = useNavigate();
  return (
    <nav className="flex items-center gap-x-4">
      <button
        onClick={() => history(-1)}
        className="w-8 h-8 items-center flex justify-center rounded-full bg-black bg-opacity-70"
      >
        <IoIosArrowBack size={22} />
      </button>
      <button
        onClick={() => history(1)}
        className="w-8 h-8 items-center flex justify-center rounded-full bg-black bg-opacity-70"
      >
        <IoIosArrowForward size={22} />
      </button>
    </nav>
  );
}
