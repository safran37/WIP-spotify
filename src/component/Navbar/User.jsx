import React from "react";
import { Menu } from "@headlessui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiExternalLink } from "react-icons/fi";

export default function User() {
  const user = {
    name: "Erkan Kurtcu",
    avatar:
      "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e",
  };
  return (
    <div className="z-50">
      <Menu as="nav" className="relative">
        {({ open }) => (
          <>
            <Menu.Button
              className={` ${
                open ? "bg-active" : "bg-black"
              } flex items-center h-8 rounded-3xl pr-2 hover:bg-active bg-black`}
            >
              <img
                className="w-8 h-8 rounded-full p-px object-cover mr-2"
                src={user.avatar}
                alt=""
              />
              <span>{user.name}</span>
              <span className={`${open == true && "rotate-180"}`}>
                <IoMdArrowDropdown size={16} />
              </span>
            </Menu.Button>
            <Menu.Items
              className={
                "absolute p-1 top-full right-0 w-48 bg-active rounded translate-y-2"
              }
            >
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`h-10 flex items-center justify-between px-2 text-sm rounded ${
                      active && "bg-white bg-opacity-20"
                    }`}
                    href="#"
                  >
                    Account settings
                    <FiExternalLink size={16} />
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`h-10 flex items-center px-2 text-sm rounded ${
                      active && "bg-white bg-opacity-20"
                    }`}
                    href="#"
                  >
                    Profile
                  </a>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`h-10 flex items-center px-2 text-sm rounded ${
                      active && "bg-white bg-opacity-20"
                    }`}
                    href="#"
                  >
                    Log out
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </>
        )}
      </Menu>
    </div>
  );
}
