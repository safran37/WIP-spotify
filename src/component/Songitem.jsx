import React from "react";
import { NavLink } from "react-router-dom";
import { BsFillPlayFill, BsFillPauseFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { setCurrent } from "./Stores/PlayerStore";

export default function Songitem({ item }) {
  const { current, playing } = useSelector((state) => state.player);
  const dispatch = useDispatch();
  const updateCurrent = () => {
    dispatch(setCurrent(item));
  };
  const imageStyle = (item) => {
    switch (item.type) {
      case "artist":
        return "rounded-full";
      case "Ending":
        return "rounded-xl";
      case "Opening":
        return "rounded-3xl";
      default:
        return "rounded";
    }
  };
  return (
    <NavLink
      className={"bg-footer p-4 rounded hover:bg-active group"}
      key={item.id}
      to={"/"}
    >
      <div className="pt-[100%] relative mb-4">
        <img
          className={`${imageStyle(
            item
          )} absolute object-cover inset-0 w-full h-full`}
          src={item.img}
        ></img>
        <button
          onClick={updateCurrent}
          className="w-10 h-10 group-hover:flex group-focus:flex hidden items-center justify-center rounded-full bg-primary absolute bottom-2 right-2"
        >
          {current?.id == item.id && playing ? (
            <BsFillPauseFill size={20} />
          ) : (
            <BsFillPlayFill size={20} />
          )}
        </button>
      </div>
      <h6 className="overflow-hidden overflow-ellipsis whitespace-nowrap text-base font-semibold">
        {item.title}
      </h6>
      <p className="line-clamp-2 text-link text-sm mt-1">{item.description}</p>
    </NavLink>
  );
}
