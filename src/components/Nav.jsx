import React, { useState } from "react";
import Taskform from "../Sections/taskform";
import { IoHomeOutline } from "react-icons/io5";
import { FaTasks } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";
import { MdOutlineAddTask } from "react-icons/md";

const Nav = () => {
  const [displayForm, setDisplayForm] = useState(false);
  const showdisplayForm = () => {
    setDisplayForm(true);
  };
  const closeDisplayForm = () => {
    setDisplayForm(false);
    console.log('show me')
  };
  return (
    <>
      <header className="bg-blue-100 py-3 px-8 pr-13 text-slate-600 font-mono ">
        <ul className="flex justify-between items-center">
          <h1 className="text-2xl font-mono font-bold text-gray-950">
            TaskTraker-Pro
          </h1>
          <div className="flex justify-around items-center gap-20 text-md ">
            <li className="flex items-center gap-1  active:text-blue-600">
              <IoHomeOutline />
              Home <RiArrowDropDownLine />
            </li>
            <li className="flex items-center gap-1 hover:text-blue-500">
              About <RiArrowDropDownLine />
            </li>
            <li className="flex items-center gap-1 hover:text-blue-500">
              <FaTasks />
              Tasks/Todo <RiArrowDropDownLine />
            </li>
          </div>
          <button
            onClick={() => showdisplayForm()}
            className="text-gray-50 bg-blue-500 py-2.5 px-3.5 rounded-full flex items-center gap-1 text-base"
          >
            <MdOutlineAddTask /> Add Tasks
          </button>
        </ul>
      </header>
      {displayForm ? <Taskform handleClose={closeDisplayForm} /> : null}
    </>
  );
};

export default Nav;
