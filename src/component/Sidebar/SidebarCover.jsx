import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { IoIosArrowDown } from "react-icons/io";
import { setSidebar } from "../Stores/PlayerStore";

export default function SidebarCover() {
  const dispatch = useDispatch();
  const current = useSelector((state) => state.player.current);
  return (
    <div className="pt-[100%] relative bg-black group">
      <img
        src={current.img}
        className="h-full w-full object-cover absolute left-0 top-0"
        alt=""
        srcset=""
      />
      <button
        onClick={() => dispatch(setSidebar(false))}
        className="w-6 absolute opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] top-1.5 right-1.5 rounded-full h-6 bg-black flex items-center justify-center"
      >
        <IoIosArrowDown size={24} />
      </button>
    </div>
  );
}
