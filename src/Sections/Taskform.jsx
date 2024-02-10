import React from 'react'
import { IoClose } from "react-icons/io5";
import { FaPlus } from "react-icons/fa6";
import { useState,useContext } from 'react';
import { MdAssignmentAdd } from "react-icons/md";
import Card from './card';
import Subtaskbox, { Textinput } from './subtaskbox';

const Taskform = ({ handleClose }) => {
  const [task,setTask]= useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("");
  const [subTasks, setSubTasks] = useState([])
  const [status, setStatus] = useState("Todo");

  //task add 
  function handleAddTask() {
    const newTask = {
      title: title,
      description: description,
      subtasks: subTasks,
      status: status,
    };
    setTask((ta) => [newTask]);
    //to reset the form
    setTitle("");
    setDescription("");
    setSubTasks([]);
    setStatus("");
    return (
      <Card title={task[index].title} subTasks={task[index].subTasks}></Card>
    );
  }
  //title add
   function handleInputTitle(event) {
     setTitle(event.target.value);
  }
  //description add
  function handleInputDescription(event) {
  setDescription(event.target.value);
  }
  //add subtask creation btn
  function createSubtasksInputField() {
   return <Subtaskbox  />;
   }
  //subtask input
   function handleInputSubtasks() {
     const newSubTask = {
       id: subTasks.length + 1,
       text: Textinput,
     };
    
     setSubTasks((sbt) => [newSubTask]);
  }
  //subtask handleAddSubtask-text- input field 
  function handleAddSubTaskText(event) {
    setText(event.target.value)
  }
  //Status Field
    function handleInputStatus(event) {
      setStatus(event.target.value);
    }
  /*const [subtaskInputFields,setSubTaskInputFields] = useState([])*/
  //btn onclick createTask function ()=>{const newTasks= <Card id={index} title={task} descrption={description} subtask={subtasks.length} status={status} ></Card> return newTasks}
  

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
            onChange={handleInputTitle}
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
          ></textarea>
        </div>
        <div className="flex-col justify-start">
          <div className="flex justify-between pr-1 items-center">
            <div className="text-lg">Subtasks</div>
            <button
              className="flex-row bg-slate-100 border rounded-sm p-[0.5]"
              onClick={proadd}
            >
          
              <FaPlus />
            </button>
          </div>
         // <ul>{add ? <li className='list-none'> </li> : null}</ul>
        </div>

        <select
          name=""
          id=""
          className="w-[100%] py-[0.5rem] border rounded-lg mt-4 px-2 border-slate-500 text-blue-500 font-mono cursor-pointer"
        >
          <option value="" className="bg-blue-300" id="todo">
            Todo
          </option>
          <option value="" className="bg-blue-300" id="doing">
            Doing
          </option>
          <option value="" className="bg-blue-300" id="done">
            Done
          </option>
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

export default Taskform 