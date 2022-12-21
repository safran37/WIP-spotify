import React from "react";
import { useSelector } from "react-redux";
import { TfiControlShuffle } from "react-icons/tfi";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillVolumeUpFill,
} from "react-icons/bs";
import { IoRepeatOutline } from "react-icons/io5";
import { secondsToTime } from "../utils";
import Customrange from "./Customrange";
import { MdCloseFullscreen } from "react-icons/md";
import logo from "../img/logo.svg";
export default function FullScreenPlayer({ toggle, state, controls }) {
  const { current } = useSelector((state) => state.player);
  return (
    <div
      className="h-full relative"
      onClick={controls[state?.playing ? "pause" : "play"]}
    >
      {current.title}
      <div
        className="absolute inset-0 object-cover bg-center bg-cover blur-md opacity-30"
        style={{ backgroundImage: `url(${current.img})` }}
      ></div>
      <div className="absolute  opacity-70 top-14 left-8 gap-x-4 text-white flex items-center">
        <img src={logo} alt="" className="w-[2.125rem] h-[2.125rem]" />
        <div className="text-xs">
          <p style={{ fontSize: 11 }}>PLAYING FROM PLAYLIST</p>
          <h6 className="font-semibold mt-0.5">{current.title}</h6>
        </div>
      </div>
      <div className="absolute bottom-36 left-8 flex items-center gap-x-5">
        <img src={current.img} className="w-24 h-24 object-cover" alt="" />
        <div className="self-end">
          <h3 className="text-3xl font-bold">{current.title}</h3>
          <p className="text-sm opacity-50 font-medium">
            {current.description}
          </p>
        </div>
      </div>
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="w-full flex flex-col absolute bottom-4 items-center px-8 gap-y-2"
      >
        <div className="w-full flex items-center mb-1.5 gap-x-2">
          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.time)}
          </div>
          <Customrange
            step={0.1}
            min={0}
            max={state?.duration || 1}
            value={state?.time}
            onChange={(value) => controls.seek(value)}
          />

          <div className="text-[0.688rem] text-white text-opacity-70">
            {secondsToTime(state?.duration)}
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div></div>
          <div className="flex items-center gap-x-7 relative left-8">
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <TfiControlShuffle size={24} />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <AiFillStepBackward size={24} />
            </button>
            <button
              onClick={controls[state?.playing ? "pause" : "play"]}
              className="w-16 h-16 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]"
            >
              {state?.playing ? (
                <BsFillPauseFill size={48} />
              ) : (
                <BsFillPlayFill size={48} />
              )}
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <AiFillStepForward size={24} name="forward" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <IoRepeatOutline size={24} name="repeat" />
            </button>
          </div>
          <div className="flex items-center gap-x-2">
            <button
              onClick={controls[state.muted ? "unmute" : "muted"]}
              className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
            >
              <BsFillVolumeUpFill size={24} name="shuffle" />
            </button>
            <div className="w-[5.813rem] max-w-full flex gap-x-3">
              <Customrange
                step={0.01}
                min={0}
                max={1}
                value={state?.volume}
                onChange={(value) => controls.volume(value)}
              />
              <button
                onClick={toggle}
                className="w-8 h-8 m-0 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
              >
                <MdCloseFullscreen size={24} name="shuffle" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
