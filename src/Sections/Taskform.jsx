import React from "react";
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useState } from "react";
import { MdAssignmentAdd } from "react-icons/md";
import SubtaskInput from "./SubtaskInput";
import { useStoreContext } from "./../context/store-context";
import { v4 as uuidv4 } from "uuid";

const Taskform = ({ handleClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [subTasks, setSubTasks] = useState([]);
  const [status, setStatus] = useState("");

  const [store, setStore] = useStoreContext();

  //task add
  function handleAddTask() {
    const newTask = {
      id: uuidv4(),
      title: title,
      description: description,
      subTasks: subTasks,
      status: status,
    };
    console.log(newTask);
    addTaskToStore(newTask.status, newTask);
    //to reset the form
    setTitle("");
    setDescription("");
    setSubTasks([]);
    setStatus("");
    handleClose();
  }

  // Add a new task to a specific task store
  function addTaskToStore(statusId, newTask) {
    console.log("statusId, newTask", statusId, newTask);
    setStore((v) =>
      v.map((store) => {
        if (store.id === statusId) {
          return {
            ...store,
            tasks: [
              ...store.tasks,
              {
                title: newTask.title,
                description: newTask.description,
                statusId,
                id: uuidv4(),
                subTasks: newTask.subTasks.map((l) => ({
                  id: uuidv4(),
                  label: l,
                  done: false,
                })),
              },
            ],
          };
        }
        return store;
      })
    );
  }

  const addSubtask = () => {
    setSubTasks((v) => [...v, ""]); // Add an empty subtask
  };

  const updateSubtask = (index, value) => {
    const updatedSubtasks = [...subTasks];
    updatedSubtasks[index] = value;
    setSubTasks(updatedSubtasks);
  };

  const removeSubtask = (index) => {
    const updatedSubtasks = [...subTasks];
    updatedSubtasks.splice(index, 1);
    setSubTasks(updatedSubtasks);
  };

  return (
    <div className="p-6 font-mono text-base  bg-gray-50 absolute top- left-[33%]  z-10 shadow-[0_35px_60px_5000px_rgba(0,0,0,0.3)] size-fit rounded-md ">
      <button
        type="button"
        className="relative left-[98%] top-0 text-slate-400"
        onClick={handleClose}
      >
        <IoClose size={20} />
      </button>
      <h2 className="text-xl -tracking-10 font-mono font-bold mb-2">
        Add New Task
      </h2>

      <div className="flex-col w-[100%]">
        <div>
          <h3 className="font-mono text-base">Title</h3>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border-solid font-mono border border-inherit w-[100%] h-9 rounded-lg px-2 "
            placeholder="e.g Make some delicious noodles"
          />
        </div>
        <div className="mt-2">
          <h3>Description</h3>
          <textarea
            cols="40"
            rows="4"
            className="border-solid border-inherit w-[100%] rounded-lg py-1 px-2"
            placeholder="e.g its always good to take a break.This 15 minutes break will reacharge the batteries a little"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </div>
        <div className="flex-col justify-start">
          <div className="flex justify-between pr-1 items-center">
            <div className="text-lg">Subtasks</div>
            <button
              className="flex-row bg-slate-100 border rounded-sm p-[0.5]"
              onClick={addSubtask}
            >
              <FaPlus />
            </button>
          </div>
          {/* <ul>{add ? <li className="list-none"> </li> : null}</ul> */}
          {subTasks.map((subtask, index) => (
            <SubtaskInput
              key={index}
              index={index}
              value={subtask}
              onChange={updateSubtask}
              onRemove={removeSubtask}
            />
          ))}
        </div>

        <select
          name=""
          id=""
          className="w-[100%] py-[0.5rem] border rounded-lg mt-4 px-2 border-slate-500 text-blue-500 font-mono cursor-pointer"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
        >
          <option value="" className="bg-blue-300" id="">
            Select status
          </option>
          {store.map((v) => (
            <option key={v.id} value={v.id} className="bg-blue-300" id={v.id}>
              {v.label}
            </option>
          ))}
        </select>
        <button
          onClick={handleAddTask}
          className="flex justify-center items-center w-[95%] bg-blue-500 py-2 mt-5 ml-2 mr-2 rounded-full "
        >
          <MdAssignmentAdd size={20} className="text-blue-50" />
          <span className="text-blue-50"> Create Tasks</span>
        </button>
      </div>
    </div>
  );
};

export default Taskform;
