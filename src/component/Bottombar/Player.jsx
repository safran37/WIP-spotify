import React from "react";
import {
  BsFillPlayFill,
  BsFillPauseFill,
  BsFillVolumeUpFill,
  BsHeart,
} from "react-icons/bs";
import { AiFillStepForward, AiFillStepBackward } from "react-icons/ai";
import { TfiControlShuffle } from "react-icons/tfi";
import { IoRepeatOutline } from "react-icons/io5";
import { useAudio, useFullscreen, useToggle } from "react-use";
import { secondsToTime } from "../../utils";
import Customrange from "../Customrange";
import { TbMicrophone2 } from "react-icons/tb";
import {
  MdOutlineQueueMusic,
  MdOpenInFull,
  MdPictureInPictureAlt,
} from "react-icons/md";
import { BiDevices } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import { setControls, setSidebar, setPlaying } from "../Stores/PlayerStore";
import { IoIosArrowUp } from "react-icons/io";
import FullScreenPlayer from "../FullScreenPlayer";
export default function Player() {
  const dispatch = useDispatch();
  const { current, sidebar } = useSelector((state) => state.player);
  const [audio, state, controls] = useAudio({
    src: current?.src,
  });
  React.useEffect(() => {
    dispatch(setControls(controls));
  }, []);
  React.useEffect(() => {
    controls.play();
  }, [current]);
  React.useEffect(() => {
    dispatch(setPlaying(state.playing));
  }, [state.playing]);
  const fsRef = React.useRef();
  const [show, toggle] = useToggle(false);
  const isFullscreen = useFullscreen(fsRef, show, {
    onClose: () => toggle(false),
  });
  return (
    <div className="flex justify-between items-center h-full px-5">
      <div className="min-w-[11.25rem] w-[30%]">
        {current && (
          <div className="flex items-center">
            <div className="flex items-center mr-3">
              {!sidebar && (
                <div className="w-14 h-14 relative group mr-3">
                  <img src={current.img} alt="" />
                  <button
                    onClick={() => dispatch(setSidebar(true))}
                    className="w-6 absolute opacity-0 group-hover:opacity-60 hover:!opacity-100 hover:scale-[1.06] top-1.5 right-1.5 rounded-full h-6 bg-black flex items-center justify-center"
                  >
                    <IoIosArrowUp size={16} />
                  </button>
                </div>
              )}
              <div>
                <h6 className="text-sm line-clamp-1 flex-shrink-0">
                  {current.title}
                </h6>
                <p className="text-[0.688rem] text-white text-opacity-70">
                  {current.artist}
                </p>
              </div>
            </div>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <BsHeart size={20} name="shuffle" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
              <MdPictureInPictureAlt size={20} name="shuffle" />
            </button>
          </div>
        )}
      </div>
      <div className="max-w-[45.125rem] w-[40%] flex flex-col px-4 items-center gap-y-2">
        <div className="flex items-center gap-x-2">
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <TfiControlShuffle size={24} />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <AiFillStepBackward size={24} />
          </button>
          <button
            onClick={controls[state?.playing ? "pause" : "play"]}
            className="w-8 h-8 flex items-center justify-center bg-white text-black rounded-full hover:scale-[1.06]"
          >
            {state?.playing ? (
              <BsFillPauseFill size={24} />
            ) : (
              <BsFillPlayFill size={24} />
            )}
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <AiFillStepForward size={24} name="forward" />
          </button>
          <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
            <IoRepeatOutline size={24} name="repeat" />
          </button>
        </div>
        <div className="w-full flex items-center gap-x-2">
          {audio}
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
      </div>
      <div className="min-w-[11.25rem] w-[30%] flex justify-end items-center">
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <TbMicrophone2 size={24} name="shuffle" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <MdOutlineQueueMusic size={24} name="shuffle" />
        </button>
        <button className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100">
          <BiDevices size={24} name="shuffle" />
        </button>
        <button
          onClick={controls[state.muted ? "unmute" : "muted"]}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          <BsFillVolumeUpFill size={24} name="shuffle" />
        </button>
        <div className="w-[5.813rem] max-w-full">
          <Customrange
            step={0.01}
            min={0}
            max={1}
            value={state?.volume}
            onChange={(value) => controls.volume(value)}
          />
        </div>
        <button
          onClick={() => toggle()}
          className="w-8 h-8 flex items-center justify-center text-white text-opacity-70 hover:text-opacity-100"
        >
          <MdOpenInFull size={24} name="shuffle" />
        </button>
      </div>
      <div ref={fsRef}>
        {isFullscreen && (
          <FullScreenPlayer toggle={toggle} state={state} controls={controls} />
        )}
      </div>
    </div>
  );
}
